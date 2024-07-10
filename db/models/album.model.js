const {Sequelize, Model, DataTypes } = require('sequelize')

const ALBUM_TABLE = 'album'

const AlbumSchema = {
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
    releseDate:{
        allowNull:false,
        field:'relese_date',
        type:DataTypes.DATE,
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


class Album extends Model{
    static associate (models){
        //
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: ALBUM_TABLE,
            modelName:'Album',
            timestamps:false
        }
    }
}


module.exports = {  Album, AlbumSchema, ALBUM_TABLE }