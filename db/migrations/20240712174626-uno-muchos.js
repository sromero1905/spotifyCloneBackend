'use strict';

const { SONG_TABLE } = require('../models/songs.model');
const { ARTIST_TABLE } = require('../models/artist.model');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn(SONG_TABLE, 'artist_id', {
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

    down: async (queryInterface) => {
        await queryInterface.removeColumn(SONG_TABLE, 'artist_id');
    }
};
