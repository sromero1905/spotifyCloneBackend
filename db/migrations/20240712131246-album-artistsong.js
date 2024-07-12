'use strict';

const { ALBUM_TABLE } = require('../models/album.model');
const { ARTIST_TABLE } = require('../models/artist.model');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(ALBUM_TABLE, 'artist_id', {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        model: ARTIST_TABLE,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(ALBUM_TABLE, 'artist_id');
  }
};
