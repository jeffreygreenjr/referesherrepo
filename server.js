// Import Dependencies
const express = require("express");
const cors = require("cors");

// Import JSON files
const staticdata = require("./staticdata.json");
const about = require("./about.json");

// Create our app object
const app = express();

// set up middleware
app.use(cors());

//home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello World");
});

// route for retrieving projects
app.get("/staticdata", (req, res) => {
  // send staticdata via JSON
  res.json(staticdata);
});

// route for retrieving about info
app.get("/about", (req, res) => {
  // send about via JSON
  res.json(about);
});

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));