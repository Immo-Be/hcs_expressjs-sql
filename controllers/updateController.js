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
   //  let position = req.body.id -1

    console.log(updatedData)
   //  console.log(position)


        // did we have a mysql error
          // return the data as json format
          // all types are discarded when converting to json
          // the column names are then the keys in the json file
         //  res.send({ ok: true, result: results });
         //  console.log(numOfTrips)
         //  numOfTrips = results[0].id

         let url = `https://api.openweathermap.org/data/2.5/weather?q=${updatedData.city}&units=metric&appid=${envWeather}`
         let result = await axios.get(url);
            // console.log(result.data)
    
            dataToInsert = {
                city: result.data.name,
                country: result.data.sys.country,
                icon: result.data.weather[0].icon,
                max_temp: result.data.main.temp_max,
                lat: result.data.coord.lat,
                lon: result.data.coord.lon,
                weatherDescription: result.data.weather[0].description,
            }
            // console.log(results[i].id)
    
    
            // DB.pool.query(
            //     "UPDATE travelData SET ? WHERE id=?",
            //     [dataToInsert, updatedData.id],
            //     (error, results, fields) => {
            //     if (error) console.log(error);
            //     console.log(results);
            //     }
            // );
    
    
            // index = results[i] -1
    
            // console.log(dataToInsert)
         //  res.send({ ok: true, result: results });

         tripData = {... dataToInsert, ...updatedData}


      DB.pool.query(
        "UPDATE travelData SET ? WHERE id=?",
        [tripData, req.body.id],
        (error, results, fields) => {
          if (error) console.log(error);
         res.json("success");
        }
      );
   //  travelData[position] = {
   //      "city": updatedData.city,
   //      "start": updatedData.start,
   //      "end": updatedData.end,
   //      "description": updatedData.description,
   //      "username": updatedData.username,
   //      "mood": null,
   //      "title": updatedData.title,
   //      "img": updatedData.img,
   //      "id": position + 1
   //  } 

   //  res.json("The trip info was updated");

 };


 module.exports = {
    root,
 }