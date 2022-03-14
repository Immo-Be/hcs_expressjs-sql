const travelData = require("../tripData.json")
const axios = require('axios');
const envWeather = process.env.OPEN_WEATHER_API_KEY
let result = {}



async function root(req, res) {
    console.log("THERE WAS A GET WITH WEATHER REQUEST");
   let weatherArray = []

//    let url = `https://api.openweathermap.org/data/2.5/weather?q=hamburg&units=metric&appid=${envWeather}`
//    const result = await axios.get(url);

//    console.log(reult)

    for (let i = 0; i < travelData.length; i++) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${travelData[i].city}&units=metric&appid=${envWeather}`
        result = await axios.get(url);
        console.log(result.data)
        weatherArray.push({
            city: result.data.name,
            country: result.data.sys.country,
            icon: result.data.weather[0].icon,
            max_temp: result.data.main.temp_max,
            lat: result.data.coord.lat,
            lon: result.data.coord.lon,
            weatherDescription: result.data.weather[0].description,
        })
    };

        for(let i = 0; i < travelData.length; i++) {
        
        travelData[i].id = i + 1
        travelData[i].country = weatherArray[i].country
        travelData[i].icon = weatherArray[i].icon
        travelData[i].max_temp = weatherArray[i].max_temp
        travelData[i].lat = weatherArray[i].lat
        travelData[i].lon = weatherArray[i].lon
        travelData[i].weatherDescription = weatherArray[i].weatherDescription
        // console.log(i)
    }

    // for(let i = 0; i < travelData.length; i++) {
        
    //     travelData[i].id = i + 1
    //     travelData[i].country = weatherArray[i].country
    //     travelData[i].icon = weatherArray[i].icon
    //     travelData[i].max_temp = weatherArray[i].max_temp
    //     travelData[i].lat = weatherArray[i].lat
    //     travelData[i].lon = weatherArray[i].lon
    //     travelData[i].weatherDescription = weatherArray[i].weatherDescription
    //     // console.log(i)
    // }

// console.log(travelData)
    res.json(travelData)
};

module.exports = {
    root,
 }