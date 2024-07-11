const Joi = require('joi')

const id = Joi.number().integer()
const title = Joi.string()
const info = Joi.string()
const BestSingers = Joi.string()



const getGenresSchema = Joi.object({
    id:id.required()
})


const createGenresSchema = Joi.object({
    title: title.required(),
    info: info.required(),
    BestSingers: BestSingers.required()
});

const updateGenresSchema = Joi.object({
    title:title,
    info: info,
    BestSingers:BestSingers
})


module.exports = {getGenresSchema, createGenresSchema , updateGenresSchema}