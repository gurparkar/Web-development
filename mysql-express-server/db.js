const sql = require("mysql2")

const connection = sql.createConnection(
    {
        host : 'localhost', 
        database : 'mytestdb',
        user : 'myuser',
        password : 'mypass'
    
    }
)

function getAllPersons() {

       return new Promise(function (resolve, reject){
            connection.query(
                `SELECT * FROM persons`,
                function(err, results){
                     if (err){
                         reject(err)
                     }
                     else {
                         resolve(results)
                     }
                }
            )
       })
}

function addNewPerson(name , age, city){

       return new Promise(function(resolve, reject){
            connection.query(
                `INSERT INTO persons (name , age , city) VALUES (?,?,?)`, 
                [name , age, city] ,
                function(err, results){
                    if (err){
                        reject(err)
                    }
                    else{
                        resolve()
                    }
                }
            )
       })
}

exports = module.exports = {
    getAllPersons,
    addNewPerson
}