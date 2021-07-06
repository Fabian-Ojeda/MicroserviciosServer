const express =  require('express')
const app = express.Router()
const fs = require('fs')
const file = './datos.json'
var data = []
data = JSON.parse(fs.readFileSync(file))
app.use(express.urlencoded({extended: true}));

app.delete('/',function(req,res){
   console.log(data.pop + ' has been exterminated!')
})

module.exports = app;