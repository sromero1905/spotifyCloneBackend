const express = require('express')
const songRouter= require('./song.routes')

function routerApi(app){
const router = express.Router()
app.use('/spotify',router)
router.use('/song',songRouter)

}

module.exports = routerApi