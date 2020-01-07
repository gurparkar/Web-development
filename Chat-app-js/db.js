const Sequelize = require('sequelize')

const db = new Sequelize(
       'userdb',
       'userdb',
        'userdb',
        {
            dialect:'mysql',
            host: 'localhost'
        }
)

const users = db.define('users', {
        username: {
            type:Sequelize.STRING,
            allowNUll: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: true
        },
        firstName: Sequelize.STRING,
        fastName: Sequelize.STRING
})

db.sync().then(() =>{
    console.log('Database has been synced !')
})

exports = module.exports = {
       db,
       users
}