const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')


class managerService{
constructor(){}

async find (){
const manager = await models.Manager.findAll()
return manager
}

async create (data){
const newmanager = await models.Manager.create(data)
return newmanager
}

async findOne(id) {
    const manager = await models.Manager.findByPk(id, {
        include: {
            model: models.Artist,
            as: 'artist',
            attributes: ['name', 'lastName']
        },
        attributes: { exclude: ["artistId","id","createdAt"] },
       
    });
    if (!manager) {
        throw boom.notFound('Manager not found');
    }
    return manager;
}


async update(id,changes){
const manager = await models.Manager.findByPk(id)
if(!manager){
    throw boom.notFound('Manager not exist')
}
const rta = await manager.update(changes)
return manager
}



async delete (id){
const manager = await models.Manager.findByPk(id)
if(!manager){
    throw boom.notFound('Manager not exist')
}
const rta = await manager.destroy()
return { rta:true }
}

}

module.exports = managerService