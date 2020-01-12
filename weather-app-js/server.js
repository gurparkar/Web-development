const geocode = require("./utils/geocode.js")
const forecast = require("./utils/forecast.js")

geocode("Chochna Gurdaspur", (error,response) => {
       console.log("Error",error)
       console.log("Response",response)

})

forecast(37.8267,-122.4233,(error, response) =>{
       console.log("Error: ", error)
       console.log("Response: ", response)
})



