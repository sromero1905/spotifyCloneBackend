const { Sequelize, Model, DataTypes } = require('sequelize');

const ARTIST_SONG_TABLE = 'artist_song';

const ArtistSongSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    artistId: {
        field: "artist_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'artist',
            key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    songId: {
        field: 'song_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'song',
            key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
};

class ArtistSong extends Model {
    static associate(models) {
        this.belongsTo(models.Artist, { as: 'artist' });
        this.belongsTo(models.Song, { as: 'song' });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: ARTIST_SONG_TABLE,
            modelName: 'ArtistSong',
            timestamps: false
        };
    }
}

module.exports = { ArtistSongSchema, ArtistSong, ARTIST_SONG_TABLE };
