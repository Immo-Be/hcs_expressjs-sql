const travelData = require("../tripData.json")

function root(req, res) {
    console.log("THERE WAS A POST REQUEST FOR NEW BOOK");
    console.log(req.body);
    
    travelData.push(req.body);

    res.json("Trip successfully added");
};

module.exports = {
    root,
 }