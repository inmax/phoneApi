const express = require("express");
const mockData = require("./mockPhones.json");
const bodyparser = require("body-parser"); //indicamos que recibimos los datos en json. Es de otro recurso
const port = 3000;
const cors = require("cors");


const app = express();
app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json()); //configuraciones para el formato json
//Como utilizar asset static. Se utilizan como recursos eventuales hasta que termina la carga del recurso final
//Images, css lik fonts
app.use(express.static("public"));

//ENDPOINT
app.get("/phones", (req, res) => {
  //recuerda que json() devuelve una promesa. res.send() serviría para cualquier formato
  res.json(mockData);
});

// app.get("/phones", cors(corsOptions), (req, res) => {
//   res.json({ mensaje: "ok"});
// });

app.listen(port, () => {
  console.log("estoy atento del puerto 3000");
});
