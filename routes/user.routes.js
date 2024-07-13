const express = require('express')
const userService = require('../service/user.service')
const {createUserSchema, getUserSchema, updateUserSchema  }= require('../schemas/user.schema')
const validatorHandler = require('../middlewares/validator.handler');

const router = express.Router()


const service = new userService()

router.get('/',async(req,res,next)=>{
    try {
        const user = await service.find()
        res.json(user)
    } catch (error) {
        next(error)
    }
})

router.get('/:id',validatorHandler(getUserSchema,'params'),
async(req,res,next)=>{
    try {
        const { id }= req.params
        const user = await service.findOne(id)
        res.json(user)
    } catch (error) {
        next(error)
    }
}
)

router.post('/',validatorHandler(createUserSchema,'body'),
async(req,res,next)=>{
    try {
        const body = req.body
        const newUser = await service.create(body)
        res.status(201).json(newUser)
    } catch (error) {
        next(error)
    }
}
)


router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
});


router.delete('/:id',
    validatorHandler(getUserSchema,'params'),
    async(req,res,next)=>{
        try {
            const { id } = req.params
            const { body } = req.body
            const user = await service.delete(id,body)
            res.status(201).json({ id })
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router