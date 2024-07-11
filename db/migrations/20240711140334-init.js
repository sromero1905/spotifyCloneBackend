'use strict';
const { ARTIST_TABLE, ArtistSchema } = require('../models/artist.model');
const { GENRES_TABLE, GenresSchema } = require('../models/genres.model');
const { SONG_TABLE, SongSchema } = require('../models/songs.model');
const { MANAGER_TABLE, ManagerSchema } = require('../models/manager.model');
const { ALBUM_TABLE, AlbumSchema } = require('../models/album.model');
const { USER_TABLE, UserSchema } = require('../models/user.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(ARTIST_TABLE, ArtistSchema);
    await queryInterface.createTable(GENRES_TABLE, GenresSchema);
    await queryInterface.createTable(SONG_TABLE, SongSchema);
    await queryInterface.createTable(MANAGER_TABLE, ManagerSchema);
    await queryInterface.createTable(ALBUM_TABLE, AlbumSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(ARTIST_TABLE);
    await queryInterface.dropTable(GENRES_TABLE)
    await queryInterface.dropTable(SONG_TABLE);
    await queryInterface.dropTable(MANAGER_TABLE);
    await queryInterface.dropTable(ALBUM_TABLE)
    await queryInterface.dropTable(USER_TABLE);
  }
};
