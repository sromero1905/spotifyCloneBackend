
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
}
}


class Artist extends Model{
    static associate (models){
        //
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