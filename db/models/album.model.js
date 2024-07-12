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
    },
    artistId:{
        field:'artist_id',
        allowNull:false,
        type:DataTypes.INTEGER,
        references:{
            model:'artist',
            key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    
}


class Album extends Model{
    static associate (models){
        this.belongsTo(models.Artist, { as:'artist' })
        this.hasMany(models.Song,{ as:'songs',foreignKey:'albumId' })
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