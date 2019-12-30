const route = require('express').Router()
const db = require('../db.js')

route.get('/', (req, res) =>{
    db.getAllPersons()
    .then((persons) => {
        res.render('persons.hbs', {persons})
    }
    
    )
    .catch((err) => {
        res.send(err)
        
    })
    
})

route.get("/add", (req, res) =>{
    res.render('persons-adds.hbs')
})

route.post("/add", (req,res) =>{
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
    .then(() =>{
        res.redirect('/pages/')})
        .catch((err) => {
            res.send(err)
        })
        
    })
    
exports = module.exports = {
        route
    }
    