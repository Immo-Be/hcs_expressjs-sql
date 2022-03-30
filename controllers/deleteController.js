const DB = require("../database")

function root(req, res) {
    DB.pool.query(
        "DELETE FROM travelData WHERE id = ?",
        req.body.id,
        (error, results, fields) => {
          if (error) console.log(error);
          console.log(results);
        }
      );

    res.json("Trip successfully deleted");
};

module.exports = {
    root,
 }