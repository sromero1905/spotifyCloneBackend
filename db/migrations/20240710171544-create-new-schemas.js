'use strict';
const { MANAGER_TABLE, ManagerSchema } = require('../models/manager.model');
const { ALBUM_TABLE, AlbumSchema } = require('../models/album.model');
const { USER_TABLE, UserSchema } = require('../models/user.model');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(MANAGER_TABLE, ManagerSchema);
    await queryInterface.createTable(ALBUM_TABLE, AlbumSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(MANAGER_TABLE);
    await queryInterface.dropTable(ALBUM_TABLE)
    await queryInterface.dropTable(USER_TABLE);
  }
};
