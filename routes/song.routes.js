const express = require('express');
const SongService = require('../service/song.service');
const { createSongSchema,getSongSchema,updateSongSchema } = require('../schemas/song.schema');
const validatorHandler = require('../middlewares/validator.handler');
const router = express.Router();
const service = new SongService();



router.get('/',async(req,res,next)=>{
    try {
        const songs  = await service.find()
        res.json(songs)
    } catch (error) {
        next(error)
    }
})


router.get('/:id',validatorHandler(getSongSchema, 'params'),
async(req,res,next)=>{
    try {
        const { id } = req.params
        const song = await service.findOne(id)
        res.json(song)
    } catch (error) {
            next(error)
    }
})

router.post('/', validatorHandler(createSongSchema, 'body'), async (req, res, next) => {
    try {
        const body = req.body;
        const newSong = await service.create(body);
        res.status(201).json(newSong);
    } catch (error) {
        next(error); 
    }
});



router.patch('/:id',
validatorHandler(getSongSchema,'params'),
validatorHandler(updateSongSchema,'body'),
async(req,res,next)=>{
    try {
        const { id}  = req.params
        const body = req.body
        const song = await service.update(id,body)
        res.json(song)
    } catch (error) {
        next(error); 
    }
})



router.delete('/:id',
    validatorHandler(getSongSchema,'params'),
    async(req,res,next)=>{
    try {
       
            const {id} = req.params
            const { body } = req.body
            const song = await service.delete(id,body)
            res.status(201).json({ id })
        }
        
     catch (error) {
        next(error); 
    } 
        
})

module.exports = router;
