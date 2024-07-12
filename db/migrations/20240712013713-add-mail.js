'use strict';

const { USER_TABLE, UserSchema } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(USER_TABLE, 'mail', {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true
    });
    await queryInterface.changeColumn(USER_TABLE, 'user_name', {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
      field: 'user_name'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(USER_TABLE, 'mail');
    await queryInterface.changeColumn(USER_TABLE, 'user_name', {
      allowNull: false,
      type: Sequelize.STRING,
      field: 'user_name',
      unique: false
    });
  }
};
