const express = require('express')
const app = express()
const puerto = process.env.PORT || 300

app.get("/", (req,res) =>{
    res.send("Hola Mundo !!")
} )
app.get("/nombre", (req,res) =>{
    res.send("Talento Tech 2024")
})
app.listen(puerto, ()=>{ console.log("servidor express en puerto ", puerto)  } )