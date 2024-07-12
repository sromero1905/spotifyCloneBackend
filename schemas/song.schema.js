const Joi= require('joi')

const id = Joi.number().integer();
const title = Joi.string().min(1);
const duration = Joi.number().integer().min(0);
const releaseDate = Joi.date();
const albumId = Joi.number().integer();
const genreId =Joi.number().integer()

const getSongSchema = Joi.object({
    id:id.required()
})


const createSongSchema = Joi.object({
    title: title.required(),
    duration: duration.required(),
    releaseDate: releaseDate.required(),
    albumId:albumId.required(),
    genreId:genreId.required()
});

const updateSongSchema = Joi.object({
    title:title,
    duration:duration,
    releaseDate:releaseDate
})


module.exports = { createSongSchema,getSongSchema,updateSongSchema };
