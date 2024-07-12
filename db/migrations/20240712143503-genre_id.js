'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('song', 'genre_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'genres', // Nombre de la tabla de géneros
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('song', 'genre_id');
  }
};
