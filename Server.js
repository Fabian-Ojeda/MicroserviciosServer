const express =  require('express')
const app = express()
const post = require('./post_service.js')
const get = require('./get_service.js')
const del = require('./delete_service.js')

app.use(express.urlencoded({ extended: false }));

app.use('/post', post)
app.use('/get', get)
app.use('/del', del)

app.get('/',function(req,res){
    res.sendFile(__dirname +'/index.html')
})

app.post('/post', post.post)
app.get('/get', get.get)
app.delete('/del', del.delete)

app.listen(3000,()=>{
    console.log('Server running http://localhost:3000')
})