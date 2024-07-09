const express = require('express')
const cors = require('cors')
const { options } = require('joi')
const {  errorHandler, logErrors, boomErrorHandler } = require('./middlewares/error.handler')
require('dotenv').config()

//inicia el proyecto
const app = express()


//middlewares
app.use(cors(options))
app.use(errorHandler)
app.use(logErrors)
app.use(boomErrorHandler)



//PORTS/ROUTER
const port = process.env.PORT ||4000
app.listen(port,()=>{
    console.log('el servidor esta corriendo en el puerto',port);
})