const express =  require('express')
const app = express.Router()
const bodyParser = require('body-parser');
const fs = require('fs')
const file = './datos.json'
var data = []
data = JSON.parse(fs.readFileSync(file))
app.use(bodyParser.urlencoded({ extended: false }));

app.delete('/delete',function(req,res){
    console.log(data.pop + ' has been exterminated!')
})

module.exports = app;