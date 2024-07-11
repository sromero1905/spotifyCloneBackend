
const express = require('express')
const songRouter= require('./song.routes')
const genreRouter = require('./genres.routes')
const albumRouter = require('./album.routes')


function routerApi(app){
  
const router = express.Router()

app.use('/spotify',router);

router.use('/song',songRouter);

router.use('/genre',genreRouter);

router.use('/album',albumRouter)

}

module.exports = routerApi