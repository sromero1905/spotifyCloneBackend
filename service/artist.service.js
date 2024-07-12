const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class artistService {
  constructor() {}

  async find() {
    try {
    const artists = await models.Artist.findAll();
    return artists;
    } catch (error) {
        console.error(error);
    }
  }

  async create(data) {
    const newArtist = await models.Artist.create(data);
    return newArtist;
  }

  async findOne(id) {
    const artist = await models.Artist.findByPk(id);
    if (!artist) {
      throw boom.notFound("Artist not found");
    }
    return artist;
  }

  async update(id, changes) {
    const artist = await models.Artist.findByPk(id);
    if (!artist) {
      throw boom.notFound("Album not found");
    }
    const rta = await album.update(changes);
    return artist;artist
  }

  async delete(id) {
    const artist = await models.Artist.findByPk(id);
    if (!artist) {
      throw boom.notFound("Album not found");
    }
    const rta = await artist.destroy();
    return { rta: true };
  }
}

module.exports = artistService;
