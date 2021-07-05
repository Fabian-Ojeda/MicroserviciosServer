const express =  require('express')
const app = express()
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res) =>{
    res.sendFile('index.html');
})

app.post('/name',function(req,res){
    console.log(req.body.name)
})
