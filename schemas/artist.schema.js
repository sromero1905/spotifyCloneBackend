const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string()
const lastName = Joi.string()
const info = Joi.string()
const birthDate = Joi.date()
const image =  Joi.string()

const getArtistSchema = Joi.object({
    id:id.required()
})

const createArtistSchema = Joi.object({
    name: name.required(),
    lastName: lastName,
    info:info.required(),
    birthDate: birthDate.required(),
    image: image.required(),
});

const updateArtistSchema = Joi.object({
    name: name ,
    lastName: lastName,
    info:info ,
    birthDate: birthDate ,
    image: image
})


    module.exports ={updateArtistSchema, createArtistSchema, getArtistSchema  }