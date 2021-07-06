const express =  require('express')
const app = express.Router()
const fs = require('fs')
const file = './datos.json'
var data = []

data = JSON.parse(fs.readFileSync(file))
app.use(express.urlencoded({extended: true}));

app.post('/',function(req,res){
    console.log(req.body.name)
    data.push(req.body.name)
    let jsonData=JSON.stringify(data)
    fs.writeFileSync(file, jsonData)
})

module.exports = app;