const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string()
const lastName = Joi.string()
const company = Joi.string()




const getManagerSchema = Joi.object({
    id:id.required()
})


const createManagerSchema = Joi.object({
    name:  name.required(),
    lastName: lastName.required(),
    company: company.required()
});

const updateManagerSchema = Joi.object({
    name:name,
    lastName: lastName,
    company:company
})


module.exports = {updateManagerSchema, createManagerSchema , getManagerSchema}