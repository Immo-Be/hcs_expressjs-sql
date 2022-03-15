const travelData = require("../tripData.json")

function root(req, res) {
    console.log("THERE WAS A POST REQUEST TO DELTE A TRIP");

    const position = req.body.id -1
    
    travelData.splice(position, 1);

    res.json("Trip successfully deleted");
};

module.exports = {
    root,
 }