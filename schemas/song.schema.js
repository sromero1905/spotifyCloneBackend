const Joi= require('joi')

const id = Joi.number().integer();
const title = Joi.string().min(1);
const duration = Joi.number().integer();
const releaseDate = Joi.date();

const getSongSchema = Joi.object({
    id:id.required()
})


const createSongSchema = Joi.object({
    title: title.required(),
    duration: duration.required(),
    releaseDate: releaseDate.required()
});

const updateSongSchema = Joi.object({
    title:title,
    duration:duration,
    releaseDate:releaseDate
})


module.exports = { createSongSchema,getSongSchema,updateSongSchema };
