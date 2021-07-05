const express =  require('express')
const app = express()
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

app.use('/post', require ('./PostServer.js'))
app.use('/get', require ('./GetServer.js'))
app.use('/delete', require ('./DeleteServer.js'))

app.listen(3000,()=>{
    console.log('Server ruasdnning http://localhost:3000')
})