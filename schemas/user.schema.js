const Joi = require('joi');

const id = Joi.number().integer();
const username = Joi.string().min(1);
const name = Joi.string().min(1);
const password = Joi.string().min(1);
const profilePicture = Joi.string().min(1);
const mail = Joi.string().min(1);


const getUserSchema = Joi.object({
  id: id.required()
});

const createUserSchema = Joi.object({
 username:username.required(),
 password:password.required(),
 mail:mail.required(),
 name:name.required(),
 profilePicture:profilePicture,

});

const updateUserSchema = Joi.object({
  username:username,
  password:password,
  mail:mail,
  name:name,
  profilePicture:profilePicture
});

module.exports = { updateUserSchema, getUserSchema, createUserSchema };

