const express = require('express')
const artistService = require('../service/artist.service')
const {createArtistSchema, getArtistSchema, updateArtistSchema  }= require('../schemas/artist.schema')
const validatorHandler = require('../middlewares/validator.handler');

const router = express.Router()


const service = new artistService()

router.get('/',async(req,res,next)=>{
    try {
        const artist = await service.find()
        res.json(artist)
    } catch (error) {
        next(error)
    }
})

router.get('/:id',validatorHandler(getArtistSchema,'params'),
async(req,res,next)=>{
    try {
        const { id }= req.params
        const artist = await service.findOne(id)
        res.json(artist)
    } catch (error) {
        next(error)
    }
}
)

router.post('/',validatorHandler(createArtistSchema,'body'),
async(req,res,next)=>{
    try {
        const body = req.body
        const newArtist = await service.create(body)
        res.status(201).json(newArtist)
    } catch (error) {
        next(error)
    }
}
)


router.patch('/:id',
  validatorHandler(getArtistSchema, 'params'),
  validatorHandler(updateArtistSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const artist = await service.update(id, body);
      res.json(artist);
    } catch (error) {
      next(error);
    }
});


router.delete('/:id',
    validatorHandler(getArtistSchema,'params'),
    async(req,res,next)=>{
        try {
            const { id } = req.params
            const { body } = req.body
            const artist = await service.delete(id,body)
            res.status(201).json({ id })
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router