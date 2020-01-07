const route = require('express').Router()

const users = require('../db.js').users

route.get('/login', (req,res) => {
       res.render('login')
})

route.get('/signup',(req,res) =>{
       res.render('signup')
})

route.post('/login', (req,res) =>{

      users.findOne({
           where: {
               username: req.body.username
            }
            }).then((user) =>{
               if(!user){
                        return res.send("No such User exists here")
               }
               if (user.password !== req.body.password){
                        return res.send("Wrong Password")
               }
               return res.send("Hello " + user.firstName)
           })
      

})

route.post('/signup', (req,res) =>{

      users.create({
          username: req.body.username,
          password: req.body.password,
          firstName: req.body.firstName,
          fastName: req.body.fastName
      }).then((createdUser) =>{
           res.redirect('/login')
      })
      .catch(function(err) {
        // print the error details
        console.log(err, request.body.email);
    });


})

exports = module.exports = {route}