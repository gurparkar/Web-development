const route = require('express').Router()

route.get('/', (req,res) =>{
    res.send("Welcome to the private page")
})

module.exports = route