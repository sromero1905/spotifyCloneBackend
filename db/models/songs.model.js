const { Sequelize, DataTypes, Model } = require('sequelize');
const { Genres } = require('./genres.model')
const SONG_TABLE = 'songs';

const SongSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  duracion: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  genresId:{
    allowNull:false,
    type:DataTypes.INTEGER,
    references:{
      model:'Genres',
      key:'id'
    },
    onUpdate:'CASCADE',
    onDelete:'CASCADE'
  }
};

class Song extends Model {
  static associate(models) {
    this.belongsToMany(models.Artist, {
      through: models.SongArtist,
      as: "artists",
      foreignKey: 'songId',
      otherKey: 'artistId'
    });
    this.belongsTo(models.Genres,{
      foreignKey:'genresId',
      as:'genres'
    })
  }
  
  static config(sequelize) {
    return {
      sequelize,
      tableName: SONG_TABLE,
      modelName: 'Song',
      timestamps: false
    };
  }
}

module.exports = { Song, SongSchema, SONG_TABLE };
