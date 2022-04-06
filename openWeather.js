const envWeather = process.env.OPEN_WEATHER_API_KEY
const axios = require('axios');
const DB = require("../database")

let dataToInsert = {
    city: "",
    country: "",
    icon: "",
    max_temp: 0,
    lat: 0,
    lon: 0,
    weatherDescription: "",
}



function getWeatherData() {

    DB.pool.query("SELECT * FROM travelData" , async (error, results, fields) => {
        if (error) {
          console.log(error);
          res.status(500).send({ ok: false, error: error });
        } else {
          res.send({ ok: true, result: results });
          console.log(numOfTrips)
          numOfTrips = results[0].id
        for (let i = 0; i < results.length; i++) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${results[i].city}&units=metric&appid=${envWeather}`
            result = await axios.get(url);
    
            dataToInsert = {
                city: result.data.name,
                country: result.data.sys.country,
                icon: result.data.weather[0].icon,
                max_temp: result.data.main.temp_max,
                lat: result.data.coord.lat,
                lon: result.data.coord.lon,
                weatherDescription: result.data.weather[0].description,
            }
            console.log(results[i].id)
    
    
            DB.pool.query(
                "UPDATE travelData SET ? WHERE id=?",
                [dataToInsert, results[i].id],
                (error, results, fields) => {
                if (error) console.log(error);
                console.log(results);
                }
            );
        
    
        };
        console.log(dataToInsert)
          res.send({ ok: true, result: results });
        }
      });

}

exports.module = {
    getWeatherData
}