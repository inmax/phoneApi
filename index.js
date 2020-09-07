const express = require("express");
const mockData = require("./mockPhones.json");
const bodyparser = require("body-parser"); 
const port = 3000;
const cors = require("cors");



const app = express();
app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//INITIAL ASSETS
app.use(express.static("public"));

//ENDPOINT
app.get("/phones", (req, res , next) => {
  res.json(mockData);
});

//error handler
app.use(function(err, req, res, next){
  console.log(err.stack);    // e.g., Not valid name
  return res.status(500).send('Internal Server Occured');
});

app.listen(port, () => {
  console.log("estoy atento del puerto 3000");
});
