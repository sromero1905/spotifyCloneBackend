const { log } = require('console')
const express = require('express')
require('dotenv').config()
const app = express()

app.get('/',(req,res)=>{
    res.send('hola a todos')
})





const port = process.env.PORT

app.listen(port,()=>{
    console.log(`servidor cuorriendo en el puerto: ${port}`);
})