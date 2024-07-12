const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class SongService {
  constructor() {}

  async find() {
    const songs = await models.Song.findAll({
      attributes: { exclude: ["albumId", "genreId", "createdAt"] },
    });
    return songs;
  }

  async create(data) {
    const newSong = await models.Song.create(data);
    return newSong;
  }

  async findOne(id) {
    const song = await models.Song.findByPk(id, {
      include: [
        {
          model: models.Album,
          as: "album",
          attributes: ["title"],
        },
        {
          model: models.Genre,
          as: "genre",
          attributes: ["title"], 
        }, 
      ],
       attributes: { exclude: ["albumId", "genreId"] },  
    });
    if (!song) {
      throw boom.notFound("song not found");
    }
    return song;
  }

  async update(id, changes) {
    const song = await models.Song.findByPk(id);
    if (!song) {
      throw boom.notFound("song not found");
    }
    const rta = await song.update(changes);
    return rta;
  }

  async delete(id) {
    const song = await models.Song.findByPk(id);
    if (!song) {
      throw boom.notFound("song not found");
    }
    const rta = await song.destroy();
    return { rta: true };
  }
}

module.exports = SongService;
