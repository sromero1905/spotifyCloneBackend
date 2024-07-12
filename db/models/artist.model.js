
const {Sequelize, Model, DataTypes } = require('sequelize')

const ARTIST_TABLE = 'artist'

const ArtistSchema = {
id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
},
name:{
    allowNull: false,
    type: DataTypes.STRING
},
lastName:{
    allowNull: true,
    field:'last_name',
    type: DataTypes.STRING
},
info:{
    allowNull: false,
    type: DataTypes.STRING
},
birthDate:{
    allowNull:false,
    type:DataTypes.DATE,
    field:'birt_date'
},
image:{
    allowNull:false,
    type:DataTypes.TEXT
},
createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}


class Artist extends Model{
    static associate (models){
        this.hasMany(models.Album,{
            as:'albums',
            foreignKey: 'artistId'
        })
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:ARTIST_TABLE,
            modelName:'Artist',
            timestamps:false
        }
    }
}


module.exports = { Artist,ARTIST_TABLE,ArtistSchema }