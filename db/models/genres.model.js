const {Sequelize, Model, DataTypes } = require('sequelize')


const GENRES_TABLE = 'genres'

const GenresSchema ={
id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
},
title:{
    allowNull:false,
    type:DataTypes.STRING
},
info:{
    allowNull:false,
    type:DataTypes.STRING
},
BestSingers:{
    allowNull:false,
    type:DataTypes.STRING,
    field:'best_singers'
},
createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}


class Genre extends Model{
    static associate (models){
        //
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: GENRES_TABLE,
            modelName:'Genre',
            timestamps:false
        }
    }
}

module.exports = { Genre, GENRES_TABLE, GenresSchema  }