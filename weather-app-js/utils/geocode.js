const request = require('request')

const geocode = (address, callback) => {

    const url1 = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiZ3VycGFya2FyIiwiYSI6ImNrNTlkNXAyNDBvZDUzZW8xamt3ZHB5YjUifQ.WmS4Aok1P0j5xE1uJC5ukg&limit=1"

    request({url : url1, json: true},(error, response) =>{
           if(error){
                  callback(error, undefined)
           }else if(response.body.features.length == 0){
                  callback("Unable to find the location. Try another search",undefined)
           }else{
                  callback(undefined,{
                         latitude: response.body.features[0].center[1],
                         longitude: response.body.features[0].center[0],
                         place: response.body.features[0].place_name
                  })
           }
})
}

module.exports = geocode