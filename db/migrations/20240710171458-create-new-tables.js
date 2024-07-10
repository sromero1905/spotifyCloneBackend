'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Migración para la tabla Artist
    await queryInterface.addColumn('artist', 'birth_date', {
      allowNull: false,
      type: Sequelize.DATE,
      field: 'birt_date' // Corregir el nombre del campo si es necesario
    });

    await queryInterface.addColumn('artist', 'image', {
      allowNull: false,
      type: Sequelize.TEXT
    });

    await queryInterface.addColumn('artist', 'created_at', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    });

    // Migración para la tabla Genre
    await queryInterface.addColumn('genres', 'created_at', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    });

    // Migración para la tabla Song
    await queryInterface.addColumn('song', 'relese_date', {
      allowNull: false,
      type: Sequelize.DATE,
      field: 'relese_date' // Corregir el nombre del campo si es necesario
    });

    await queryInterface.addColumn('song', 'created_at', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revertir migraciones para la tabla Artist
    await queryInterface.removeColumn('artist', 'birth_date');
    await queryInterface.removeColumn('artist', 'image');
    await queryInterface.removeColumn('artist', 'created_at');

    // Revertir migraciones para la tabla Genre
    await queryInterface.removeColumn('genres', 'created_at');

    // Revertir migraciones para la tabla Song
    await queryInterface.removeColumn('song', 'relese_date');
    await queryInterface.removeColumn('song', 'created_at');
  }
};
