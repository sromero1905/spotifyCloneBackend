'use strict';
const { ARTIST_TABLE, ArtistSchema } = require('../models/artist.model');
const { GENRES_TABLE, GenresSchema } = require('../models/genres.model');
const { SONG_TABLE, SongSchema } = require('../models/songs.model');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(ARTIST_TABLE, ArtistSchema);
    await queryInterface.createTable(GENRES_TABLE, GenresSchema);
    await queryInterface.createTable(SONG_TABLE, SongSchema);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(ARTIST_TABLE);
    await queryInterface.dropTable(GENRES_TABLE)
    await queryInterface.dropTable(SONG_TABLE);
  }
};
