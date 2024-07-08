const { Song,SongSchema } = require('./songs.model')
const { Genres,GenresSchema } = require('./genres.model')
const { Artist,ArtistSchema } = require('./artist.model')
const { SongArtist,SongArtistSchema } = require('./songArtist.model')

function setUpModels (sequelize){
    //incializar modelos
    Song.init(SongSchema, Song.config(sequelize))
    Genres.init(GenresSchema, Genres.config(sequelize))
    Artist.init(Artist, Artist.config(sequelize))
    SongArtist.init(SongArtistSchema.config(sequelize))


    //Asociaciones 
    Artist.associate(sequelize.models)
    Song.associate(sequelize.models)
    Genres.associate(sequelize.models)
}


module.exports = setUpModels;