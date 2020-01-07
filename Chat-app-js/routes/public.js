const route = require('express').Router()

route.get('/', (req,res) =>{
    res.send("Welcome to the public page")
})

module.exports = route