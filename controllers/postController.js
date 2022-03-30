const DB = require("../database")
const envWeather = process.env.OPEN_WEATHER_API_KEY
const axios = require('axios');

let dataToInsert = {
    city: "",
    country: "",
    icon: "",
    max_temp: 0,
    lat: 0,
    lon: 0,
    weatherDescription: "",
 }

 let tripData = {}

async function root(req, res) {


    let newTrip = req.body
    console.log(newTrip)

         let url = `https://api.openweathermap.org/data/2.5/weather?q=${newTrip.city}&units=metric&appid=${envWeather}`
         let result = await axios.get(url);
    
            dataToInsert = {
                city: result.data.name,
                country: result.data.sys.country,
                icon: result.data.weather[0].icon,
                max_temp: result.data.main.temp_max,
                lat: result.data.coord.lat,
                lon: result.data.coord.lon,
                weatherDescription: result.data.weather[0].description,
            }
    
            console.log(dataToInsert)

    tripData = {...newTrip, ...dataToInsert}
    console.log(tripData)


    DB.pool.query(
        "INSERT INTO travelData SET ?",
        dataToInsert,
        (error, results, fields) => {
          if (error) console.log(error);
          console.log(tripData)
        }
      );


};

module.exports = {
    root,
 }