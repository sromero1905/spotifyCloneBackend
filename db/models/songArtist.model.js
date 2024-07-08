const { Sequelize, Model, DataTypes } = require('sequelize');
const { SONG_TABLE } = require('./songs.model');
const { ARTIST_TABLE } = require('./artist.model');

const SONG_ARTIST_TABLE = 'song_artist';

const SongArtistSchema = {
  songId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: SONG_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  artistId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: ARTIST_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
};

class SongArtist extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: SONG_ARTIST_TABLE,
      modelName: 'SongArtist',
      timestamps: false
    };
  }
}

module.exports = { SongArtist, SongArtistSchema, SONG_ARTIST_TABLE };
