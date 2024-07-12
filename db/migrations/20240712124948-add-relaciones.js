'use strict'
const { SONG_TABLE } = require('../models/songs.model');
const { ALBUM_TABLE } = require('../models/album.model');
const { ARTIST_TABLE } = require('../models/artist.model');
const { MANAGER_TABLE } = require('../models/manager.model');
const { ARTIST_SONG_TABLE, ArtistSongSchema } = require('../models/artistSong.model');






/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(SONG_TABLE, 'album_id', {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        model: ALBUM_TABLE,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.addColumn(ARTIST_TABLE, 'manager_id', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: MANAGER_TABLE,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
    await queryInterface.createTable(ARTIST_SONG_TABLE, ArtistSongSchema)
  },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(SONG_TABLE, 'album_id');
    await queryInterface.removeColumn(ARTIST_TABLE, 'manager_id');
  }
};