const express = require('express')
const GenresService = require('../service/genres.service')
const {createGenresSchema, getGenresSchema, updateGenresSchema  }= require('../schemas/genres.schema')
const validatorHandler = require('../middlewares/validator.handler');

const router = express.Router()


const service = new GenresService()

router.get('/',async(req,res,next)=>{
    try {
        const genres = await service.find()
        res.json(genres)
    } catch (error) {
        next(error)
    }
})

router.get('/:id',validatorHandler(getGenresSchema,'params'),
async(req,res,next)=>{
    try {
        const { id }= req.params
        const song = await service.findOne(id)
        res.json(song)
    } catch (error) {
        next(error)
    }
}
)

router.post('/',validatorHandler(createGenresSchema,'body'),
async(req,res,next)=>{
    try {
        const body = req.body
        const NewGenre = await service.create(body)
        res.status(201).json(NewGenre)
    } catch (error) {
        next(error)
    }
}
)


router.patch('/:id',
  validatorHandler(getGenresSchema, 'params'),
  validatorHandler(updateGenresSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const genre = await service.update(id, body);
      res.json(genre);
    } catch (error) {
      next(error);
    }
});


router.delete('/:id',
    validatorHandler(getGenresSchema,'params'),
    async(req,res,next)=>{
        try {
            const { id } = req.params
            const { body } = req.body
            const genre = await service.delete(id,body)
            res.status(201).json({ id })
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router