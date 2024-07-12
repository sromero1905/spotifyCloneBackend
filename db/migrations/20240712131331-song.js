'use strict';

const { ARTIST_SONG_TABLE, ArtistSongSchema } = require('../models/artistSong.model');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(ARTIST_SONG_TABLE, ArtistSongSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(ARTIST_SONG_TABLE);
  }
};
