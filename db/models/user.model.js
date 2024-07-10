const {Sequelize, Model, DataTypes } = require('sequelize')

const USER_TABLE = 'user'

const UserSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
        
    },
    password:{
        allowNull:false,
        type:DataTypes.STRING
    },
    username:{
        allowNull:false,
        unique:true,
        type:DataTypes.STRING,
        field:'user_name'
    },
    name:{
        allowNull:false,
        type:DataTypes.STRING
    },
    profilePicture:{
        allowNull:true,
        type:DataTypes.TEXT,
        field:'profile_picture'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      }

}

class User extends Model{
    static associate(models){
        //
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:USER_TABLE,
            modelName:'User',
            timestamps:false
        }
    }
}


module.exports = {  User, UserSchema, USER_TABLE }