const Joi = require("joi")

const id = Joi.number().integer()
const title = Joi.string().min(1).max(40)
const duration = Joi.number().integer().min(1)


const createSongSchema = Joi.object({
    title:title.required(),
    duration: duration.required()
})

const updateSongSchema = Joi.object({
    title:title.required(),
    duration:duration.required()
})

const getSongScehma = Joi.object({
    id,
    title
})

module.exports = { createSongSchema,updateSongSchema, getSongScehma }