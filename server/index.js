const express = require("express");
const connectDB = require("./database");
const bodyParser = require('body-parser');
const api = require("./api/v1");

//  Conexion a BD
connectDB();

// Inicializacion de aplicacion express
const app = express();
app.use(bodyParser.json());
// Setup Router and routes

app.use("/api", api);


module.exports = app;
