// use the mysql package
const mysql = require("mysql");
// create a connection pool
// with the pool we can re-use connections more easily
const pool = mysql.createPool({
  host: "sql11.freemysqlhosting.net",
  user: "sql11482214",
  password: "dAM5RhXlZg",
  database: "travelData",
  connectionLimit: 10,
});




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

app.listen(port, function() {
    console.log("Server started on port " + port)
})
