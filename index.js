const express = require('express')
const app = express()
const port = 3000



app.get('/',(req,res)=>{
    res.send('hola a todos')
})


app.listen(port,()=>{
    console.log('el servidor esta corriendo en el puerto',port);
})