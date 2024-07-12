const cors = require('cors')
const express = require('express')
const  routerApi = require('./routes/index')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler'); 
require('dotenv').config()


const app = express()







//midleware
app.use(cors());
app.use(express.json());
app.use(logErrors)
app.use(errorHandler)
app.use(boomErrorHandler)





//routes/server
routerApi(app)
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`servidor cuorriendo en el puerto: ${port}`);
})