const { Song,SongSchema } = require('./songs.model')
const { Artist,ArtistSchema } = require('./artist.model')
const { Genre,GenresSchema } = require('./genres.model')
 



function setUpModels(sequelize){
// Inicializar modelos
Song.init(SongSchema, Song.config(sequelize)),
Artist.init(ArtistSchema, Artist.config(sequelize))
Genre.init(GenresSchema, Genre.config(sequelize))

}

module.exports = setUpModels