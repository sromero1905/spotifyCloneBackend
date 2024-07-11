const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')


class albumService {
    constructor(){}

    async find (){
        const albums = await models.Album.findAll()
        return albums
        }
        
        async create (data){
        const NewAlbum = await models.Album.create(data)
        return NewAlbum
        }
        
        async findOne(id){
        const album = await models.Album.findByPk(id)
        if(!album){
            throw boom.notFound('Album not found')
        }
        return album
        }
        
        
        async update(id,changes){
        const album = await models.Album.findByPk(id)
        if(!album){
            throw boom.notFound('Album not found')
        }
        const rta = await album.update(changes)
        return album
        }
        
        
        
        async delete (id){
        const album = await models.Album.findByPk(id)
        if(!album){
            throw boom.notFound('Album not found')
        }
        const rta = await album.destroy()
        return { rta:true }
        }
        
        }
        
        module.exports = albumService