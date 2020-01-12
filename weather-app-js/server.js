const geocode = require("./utils/geocode.js")
const forecast = require("./utils/forecast.js")

const address = process.argv[2]
if (!address){
       console.log("Please provide an address")
}else {
       geocode(address, (error,{latitude, longitude, place}) => { // response(object) has a three properties inside it so we will use destructuring here
              if (error){
                     return console.log(error)
              }
              forecast(latitude,longitude,(error, forecastResponse) =>{
                     if(error){
                            return console.log(error)
                     }
                     return console.log("In " + place + " weather is " + forecastResponse)
              })
              
       
              
       
       })
       


}




