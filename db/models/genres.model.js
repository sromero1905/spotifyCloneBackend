const { Sequelize, Model, DataTypes }= require('sequelize')

const GENRES_TABLE = 'genres'

const GenresSchema= {
    id:{
        allowNull:false,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    title:{
        allowNull:false,
        type:DataTypes.STRING,
    },
    description:{
        allowNull:false,
        type:DataTypes.STRING,
    }
}

class Genres extends Model{
    static associate(models){
        this.hasMany(models.Song,{
            foreignKey:'genresId',
            as:'songs'
        })
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:GENRES_TABLE,
            modelName:'Genres',
            timestamps:false
        }
    }
}

module.exports = { Genres, GenresSchema,GENRES_TABLE}