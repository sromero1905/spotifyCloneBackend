const Joi = require('joi')

const id = Joi.number().integer()
const title = Joi.string()
const releseDate = Joi.date()
const image =  Joi.string()
const artistId = Joi.number().integer()

const getAlbumSchema = Joi.object({
    id:id.required()
})

const createAlbumSchema = Joi.object({
    title: title.required(),
    releseDate: releseDate.required(),
    image: image.required(),
    artistId: artistId.required()
});

const updateAlbumSchema = Joi.object({
    title:title,
    releseDate:releseDate,
    image: image,
    artistId: artistId
})


module.exports ={createAlbumSchema, updateAlbumSchema, getAlbumSchema  }