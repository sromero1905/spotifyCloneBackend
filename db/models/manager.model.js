const {Sequelize, Model, DataTypes } = require('sequelize')


const MANAGER_TABLE = 'manager'

const ManagerSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull:false,
        type:DataTypes.STRING
    },
    password:{
        allowNull:true,
        type:DataTypes.STRING
    },
    lastName:{
        allowNull:false,
        field:'last_name',
        type:DataTypes.STRING
    },
    company:{
        allowNull:false,
        type:DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    },
    role:{
        allowNull:true,
        type:DataTypes.STRING,
        defaultValue: 'admin'
    }
}

class Manager extends Model{
    static associate (models){
        this.hasMany(models.Artist,{ as:'artist',foreignKey:'managerId' })
    }
    static config(sequelize){
        return{
            sequelize,
           tableName:MANAGER_TABLE,
           modelName:'Manager',
           timestamps:false
        }
    }
}

module.exports= {  MANAGER_TABLE,Manager,ManagerSchema }