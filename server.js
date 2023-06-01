// DEPENDENCIES //
const express = require("express");
const mongoose = require("mongoose");   
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const { PORT = 4000, MONGODB_URL} = process.env;

const app = express();

// DATABASE CONNECTION //
mongoose.connect(MONGODB_URL);

// Connection Events 
mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

mongoose.set('strictQuery', false);

// MiddleWare //

app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies


// MODELS //
const People = require('./models/people');

// Controllers //
const peopleController = require('./controllers/people');
app.use('/people', peopleController);

// ROUTES //

// create a test route //
app.get("/", (req, res) => {
  res.send("hello world");
});


// LISTENING //

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
