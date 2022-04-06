const DB = require("../database")

function root(req, res) {
    DB.pool.query(
        "DELETE FROM travelData WHERE id = ?",
        req.body.id,
        (error, results, fields) => {
          if (error) {
            console.log(error);
            res.status(500).send({ ok: false, error: error })
          } else {
            res.send({ ok: true, result: results });
          };
        }
      );
};

module.exports = {
    root,
 }
