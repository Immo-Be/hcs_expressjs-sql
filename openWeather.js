function getWeatherData() {

    DB.pool.query("SELECT * FROM travelData" , async (error, results, fields) => {
        // did we have a mysql error?
        if (error) {
          console.log(error);
          res.status(500).send({ ok: false, error: error });
        } else {
          console.log(results[0].city);
          // return the data as json format
          // all types are discarded when converting to json
          // the column names are then the keys in the json file
          res.send({ ok: true, result: results });
          console.log(numOfTrips)
          numOfTrips = results[0].id
        for (let i = 0; i < results.length; i++) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${results[i].city}&units=metric&appid=${envWeather}`
            result = await axios.get(url);
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
            console.log(results[i].id)
    
    
            DB.pool.query(
                "UPDATE travelData SET ? WHERE id=?",
                [dataToInsert, results[i].id],
                (error, results, fields) => {
                if (error) console.log(error);
                console.log(results);
                }
            );
    
    
        //     // index = results[i] -1
    
    
        };
        console.log(dataToInsert)
          res.send({ ok: true, result: results });
        }
      });

}