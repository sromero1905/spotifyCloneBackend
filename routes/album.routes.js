const express = require('express')
const albumService = require('../service/album.service')
const {createAlbumSchema, getAlbumSchema, updateAlbumSchema  }= require('../schemas/album.schema')
const validatorHandler = require('../middlewares/validator.handler');

const router = express.Router()


const service = new albumService()

router.get('/',async(req,res,next)=>{
    try {
        const album = await service.find()
        res.json(album)
    } catch (error) {
        next(error)
    }
})

router.get('/:id',validatorHandler(getAlbumSchema,'params'),
async(req,res,next)=>{
    try {
        const { id }= req.params
        const album = await service.findOne(id)
        res.json(album)
    } catch (error) {
        next(error)
    }
}
)

router.post('/',validatorHandler(createAlbumSchema,'body'),
async(req,res,next)=>{
    try {
        const body = req.body
        const NewAlbum = await service.create(body)
        res.status(201).json(NewAlbum)
    } catch (error) {
        next(error)
    }
}
)


router.patch('/:id',
  validatorHandler(getAlbumSchema, 'params'),
  validatorHandler(updateAlbumSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const album = await service.update(id, body);
      res.json(album);
    } catch (error) {
      next(error);
    }
});


router.delete('/:id',
    validatorHandler(getAlbumSchema,'params'),
    async(req,res,next)=>{
        try {
            const { id } = req.params
            const { body } = req.body
            const album = await service.delete(id,body)
            res.status(201).json({ id })
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router