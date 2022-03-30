require('dotenv').config()


const express = require("express");
const cors = require("cors");
const updateRouter = require("./routes/updateRouter");
const deleteRouter = require("./routes/deleteRouter");
const postRouter = require("./routes/postRouter");
const getDataRouter = require("./routes/getDataRouter");
const app = express();


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
