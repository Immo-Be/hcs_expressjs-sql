const travelData = require("../tripData.json")

// function root(req, res) {

//     console.log("THERE WAS A PUT REQUEST");




//     const weatherData = req.body
//     const result = []

//     console.log(result)

//     for(let i = 0; i < weatherData.length; i++) {
        
//         travelData[i].id = i + 1
//         travelData[i].country = req.body[i].country
//         travelData[i].icon = req.body[i].icon
//         travelData[i].max_temp = req.body[i].max_temp
//         travelData[i].lat = req.body[i].lat
//         travelData[i].lon = req.body[i].lon
//         travelData[i].weatherDescription = req.body[i].weatherDescription
//         console.log(i)
//     }

//     res.json("Your data was updated");
 
//  };

 function root (req, res) {


    let updatedData = req.body
    let position = req.body.id -1

    travelData[position] = {
        "city": updatedData.city,
        "start": updatedData.start,
        "end": updatedData.end,
        "description": updatedData.description,
        "username": updatedData.username,
        "mood": null,
        "title": updatedData.title,
        "img": updatedData.img,
        "id": position + 1
    } 

    res.json("The trip info was updated");

 };


 module.exports = {
    root,
 }