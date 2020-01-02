const route = require('express').Router()

route.use('/users', require('./users.js').route)

route.use('/products', require('./products.js').route)

exports = module.exports = {
    route
}