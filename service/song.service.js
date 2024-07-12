const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class SongService {
  constructor() {}

  async find() {
    try {
      const songs = await models.Song.findAll({
        include: [
          {
            model: models.Artist,
            as: 'artist',
            attributes: ['name', 'lastName'],
          },
        ],
        attributes: { exclude: ["artistId","createdAt","albumId","genreId","releaseDate"] },
      });
      return songs;
    } catch (error) {
      console.error(error);
    }
  }

  async findOne(id) {
    const song = await models.Song.findByPk(id, {
      include: [
        {
          model: models.Artist,
          as: 'artist',
          attributes: ['name', 'lastName'],
        },
        {
          model: models.Album,
          as: 'album',
          attributes: ['title'],
        },
       
      ],
      attributes: { exclude: ["artistId","createdAt","albumId","genreId"] },
    });
    if (!song) {
      throw boom.notFound('Song not found');
    }
    return song;
  }

  async create(data) {
    try {
    const newSong = await models.Song.create(data);
    return newSong;
    } catch (error) {
      console.error(error);
    }
  }

  async update(id, changes) {
    const song = await models.Song.findByPk(id);
    if (!song) {
      throw boom.notFound('Song not found');
    }
    const updatedSong = await song.update(changes);
    return updatedSong;
  }

  async delete(id) {
    const song = await models.Song.findByPk(id);
    if (!song) {
      throw boom.notFound('Song not found');
    }
    await song.destroy();
    return { rta: true };
  }
}

module.exports = SongService;
