require('dotenv').config()

const config ={
    env:process.env.NODE_ENV||'dev',
    port: process.env.PORT || 4000,
    dbUser: process.env.DB_USER,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD,
    dbPort:process.env.DB_PORT,

}


module.exports = { config }