const cors = require('cors')
const express = require('express')
const  routerApi = require('./routes/index')
require('dotenv').config()


const app = express()







//midleware
app.use(cors());
app.use(express.json());





//routes/server
routerApi(app)
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`servidor cuorriendo en el puerto: ${port}`);
})