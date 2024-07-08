const { Sequelize, DataTypes, Model } = require('sequelize');

const ARTIST_TABLE = 'artists';

const ArtistSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "last_name"
  },
  info: {
    allowNull: false,
    type: DataTypes.STRING
  },
  monthlyListeners: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "monthly_listeners"
  }
};

class Artist extends Model {
  static associate(models) {
    this.belongsToMany(models.Song, {
      through: models.SongArtist,
      as: 'songs',
      foreignKey: 'artistId',
      otherKey: 'songId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ARTIST_TABLE,
      modelName: 'Artist',
      timestamps: false
    };
  }
}

module.exports = { Artist, ArtistSchema, ARTIST_TABLE };
