const express = require('express')
const managerService = require('../service/manager.service')
const {createManagerSchema, getManagerSchema, updateManagerSchema  }= require('../schemas/manager.schema')
const validatorHandler = require('../middlewares/validator.handler');

const router = express.Router()


const service = new managerService()

router.get('/',async(req,res,next)=>{
    try {
        const manager = await service.find()
        res.json(manager)
    } catch (error) {
        next(error)
    }
})

router.get('/:id',validatorHandler(getManagerSchema,'params'),
async(req,res,next)=>{
    try {
        const { id }= req.params
        const manager = await service.findOne(id)
        res.json(manager)
    } catch (error) {
        next(error)
    }
}
)

router.post('/',validatorHandler(createManagerSchema,'body'),
async(req,res,next)=>{
    try {
        const body = req.body
        const newmanager = await service.create(body)
        res.status(201).json(newmanager)
    } catch (error) {
        next(error)
    }
}
)


router.patch('/:id',
  validatorHandler(getManagerSchema, 'params'),
  validatorHandler(updateManagerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const manager = await service.update(id, body);
      res.json(manager);
    } catch (error) {
      next(error);
    }
});


router.delete('/:id',
    validatorHandler(getManagerSchema,'params'),
    async(req,res,next)=>{
        try {
            const { id } = req.params
            const { body } = req.body
            const manager = await service.delete(id,body)
            res.status(201).json({ id })
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router