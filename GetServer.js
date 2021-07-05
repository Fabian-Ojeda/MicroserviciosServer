const express = require('express')
const fs = require('fs')
const archivo = './datos.json'


var app = express.Router()

app.get('/', (req, res)=>{
    var data =[]
    data = JSON.parse(fs.readFileSync(archivo))
    res.send(data)
})

module.exports = app