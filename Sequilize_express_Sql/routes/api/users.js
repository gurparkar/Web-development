

const User = require('../../db').User

const route = require('express').Router()

route.get('/' , (req,res) => {


       User.findAll()
                     .then((users) =>{
                         res.status(201).send(users)

                     }) 
                     .catch((err) =>{
                         res.status(500).send({
                             error: "Could not retrieve Users"
                         })

                     })
})

route.post('/', (req, res) =>{


     User.create({
        
          name : req.body.name
      }).then((user) => {
               res.send(user)
      })
      .catch((err) => {


        res.status(500).send({
            error : "Could not add new user"
        })
      })
})


exports = module.exports = {
     
      route
}