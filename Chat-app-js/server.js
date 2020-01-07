const express = require('express')

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/public', require('./routes/public'))
app.use('/private', require('./routes/private'))


app.set('view engine', 'hbs')



app.use('/', require('./routes/root.js').route)

app.listen(2345, () =>{
    console.log("Server is started at http://localhost:2345")
})
