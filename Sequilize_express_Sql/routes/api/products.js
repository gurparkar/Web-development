const route = require('express').Router()

const Product = require('../../db').Product



route.get('/' , (req,res) => {


       Product.findAll()
                     .then((products) =>{
                         res.status(201).send(products)

                     }) 
                     .catch((err) =>{
                         res.status(500).send({
                             error: "Could not retrieve Users"
                         })

                     })
})

route.post('/', (req, res) =>{


     Product.create({
        
          name : req.body.name,
          manufacturer : req.body.manufacturer,
          price : parseFloat(req.body.price)
      }).then((product) => {
               res.send(product)
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