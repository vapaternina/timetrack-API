const express = require("express");
const connectDB = require("./database");

const api = require("./api/v1");

//  Conexion a BD
connectDB();

// Inicializacion de aplicacion express
const app = express();

// Setup Router and routes
app.use("/api", api);

module.exports = app;
