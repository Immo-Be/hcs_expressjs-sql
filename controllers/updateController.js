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


 async function root (req, res) {


    let updatedData = req.body

    console.log(updatedData)

         let url = `https://api.openweathermap.org/data/2.5/weather?q=${updatedData.city}&units=metric&appid=${envWeather}`
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
   

         tripData = {... dataToInsert, ...updatedData}


      DB.pool.query(
        "UPDATE travelData SET ? WHERE id=?",
        [tripData, req.body.id],
        (error, results, fields) => {
         if (error) {
            console.log(error);
            res.status(500).send({ ok: false, error: error })
          } else {
            res.send({ ok: true, result: results });
            res.json("Trip successfully updated");
          };
        }
      );

 };


 module.exports = {
    root,
 }