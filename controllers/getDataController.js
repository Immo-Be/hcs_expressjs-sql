const axios = require('axios');
const DB = require("../database")



function root(req, res) {

    DB.pool.query("SELECT * FROM travelData" , async (error, results, fields) => {
        if (error) {
          console.log(error);
          res.status(500).send({ ok: false, error: error });
        } else {
          res.send({ ok: true, result: results });
        }
      });
};

module.exports = {
    root,
 }