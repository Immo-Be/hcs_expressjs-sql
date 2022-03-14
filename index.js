const express = require("express");
const cors = require("cors");
const updateRouter = require("./routes/updateRouter");
const deleteRouter = require("./routes/deleteRouter");
const postRouter = require("./routes/postRouter");
const getDataRouter = require("./routes/getDataRouter");
const app = express();
const travelData = require("./tripData.json")

const port = process.env.PORT || 3002;

app.use(express.json());

app.use(cors());

app.use("/update", updateRouter);
app.use("/deleteTrip", deleteRouter);
app.use("/id", postRouter);
app.use("/", getDataRouter);


// app.get("/", function(req, res) {


//     res.json(travelData)
// })

// app.post("/id", function(req, res) {
//     console.log("THERE WAS A POST REQUEST FOR NEW BOOK");
//     console.log(req.body);
    
//     travelData.push(req.body);

//     res.json("Thanks");
// });

// app.delete("/deleteTrip", function(req, res) {
//     console.log("THERE WAS A POST REQUEST TO DELTE A TRIP");

//     const position = req.body.id -1
    
//     travelData.splice(position, 1);

//     res.json("Thanks");
// });


// app.put("/update", (req, res) => {

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
 
//  });

//  app.put("/update/trip", (req, res) => {


//     let updatedData = req.body
//     let position = req.body.id -1

//     travelData[position] = {
//         "city": updatedData.city,
//         "start": updatedData.start,
//         "end": updatedData.end,
//         "description": updatedData.description,
//         "username": updatedData.username,
//         "mood": null,
//         "title": updatedData.title,
//         "img": updatedData.img,
//         "id": position + 1
//     } 

//     res.json("The trip info was updated");

//  });

app.listen(port, function() {
    console.log("Server started on port " + port)
})
