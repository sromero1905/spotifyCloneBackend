const { Song,SongSchema } = require('./songs.model')
const { Artist,ArtistSchema } = require('./artist.model')
const { Genre,GenresSchema } = require('./genres.model')
 
const { User,UserSchema } = require('./user.model')
const { Manager,ManagerSchema } = require('./manager.model')
const { Album,AlbumSchema } = require('./album.model')



function setUpModels(sequelize){
// Inicializar modelos
Song.init(SongSchema, Song.config(sequelize)),
Artist.init(ArtistSchema, Artist.config(sequelize))
Genre.init(GenresSchema, Genre.config(sequelize))

User.init(UserSchema, User.config(sequelize))
Manager.init(ManagerSchema, Manager.config(sequelize))
Album.init(AlbumSchema, AlbumSchema.config(sequelize))



}

module.exports = setUpModels