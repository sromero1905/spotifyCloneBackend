const { Sequelize, Model, DataTypes } = require('sequelize');

const SONG_TABLE = 'song';

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
    duration: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    releaseDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'release_date'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    },
    genreId: {
        field: 'genre_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'genres',
            key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: 'SET NULL'
    },
    albumId: {
        field: 'album_id',
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: 'album',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
};

class Song extends Model {
    static associate(models) {
        this.belongsTo(models.Genre, { as: 'genre' });
        this.belongsTo(models.Album, { as: 'album' });
        this.belongsToMany(models.Artist, {
            through: models.ArtistSong,
            as: 'artists',
            foreignKey: 'songId',
            otherKey: 'artistId'
        });
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
