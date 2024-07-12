const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");


class albumService {
  constructor() {}

  async find() {
    const albums = await models.Album.findAll({
      include: [
        {
          model: models.Artist,
          as: "artist",
          attributes: ["name", "lastName"],
        },
      ],
      attributes: { exclude: ["artistId"] },
    });
    return albums;
  }

  async findOne(id) {
    const album = await models.Album.findByPk(id, {
      include: [
        {
          model: models.Song,
          as: "songs",
          attributes: ["title"],
        },
        {
          model: models.Artist,
          as: "artist",
          attributes: ["name", "lastName", "info"],
        },
      ],
      attributes: { exclude: ["createdAt","artistId","id"] },
    });

    if (!album) {
      throw boom.notFound("Album not found");
    }

    return album;
  }

  async update(id, changes) {
    const album = await models.Album.findByPk(id);
    if (!album) {
      throw boom.notFound("Album not found");
    }
    const rta = await album.update(changes);
    return album;
  }

  async delete(id) {
    const album = await models.Album.findByPk(id);
    if (!album) {
      throw boom.notFound("Album not found");
    }
    const rta = await album.destroy();
    return { rta: true };
  }
}

module.exports = albumService;
