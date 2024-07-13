"use strict";
const { MANAGER_TABLE } = require("../models/manager.model");
const { USER_TABLE } = require("../models/user.model");

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.addColumn(MANAGER_TABLE, "password", {
      allowNull:true,
      type:Sequelize.STRING

    })

    await queryInterface.addColumn(USER_TABLE, "role", {
      allowNull:true,
      type:Sequelize.STRING,
      defaultValue: 'user'

    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(SONG_TABLE, "artist_id");
  },
};
