const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')


class GenresService{
constructor(){}

async find (){
const genres = await models.Genre.findAll()
return genres
}

async create (data){
const NewGenre = await models.Genre.create(data)
return NewGenre
}

async findOne(id){
const genre = await models.Genre.findByPk(id)
if(!genre){
    throw boom.notFound('genre not found')
}
return genre
}


async update(id,changes){
const genre = await models.Genre.findByPk(id)
if(!genre){
    throw boom.notFound('genre not found')
}
const rta = await genre.update(changes)
return genre
}



async delete (id){
const genre = await models.Genre.findByPk(id)
if(!genre){
    throw boom.notFound('genre not found')
}
const rta = await genre.destroy()
return { rta:true }
}

}

module.exports = GenresService