const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class userService {
  constructor() {}

  async find() {
    try {
    const user = await models.User.findAll();
    return user;
    } catch (error) {
        throw boom.notFound('user not found')
    }
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound("user not found");
    }
    return song;
  }

  async update(id, changes) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound("user not found");
    }
    const rta = await user.update(changes);
    return user;
  }

  async delete(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound("user not found");
    }
    const rta = await user.destroy();
    return { rta: true };
  }
}

module.exports = artistService;
