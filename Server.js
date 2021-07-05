const express =  require('express')
const app = express()
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

app.use('/post', require ('./post_service.js'))
app.use('/get', require ('./get_service.js'))
app.use('/delete', require ('./delete_service.js'))

app.listen(3000,()=>{
    console.log('Server running http://localhost:3000')
})