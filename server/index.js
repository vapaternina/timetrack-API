const express = require("express");
const connectDB = require("./database");
const bodyParser = require("body-parser");
const api = require("./api/v1");

const logger = require("winston");

//  Conexion a BD
connectDB();

// Inicializacion de aplicacion express
const app = express();
app.use(bodyParser.json());

// Setup Router and routes
app.use("/api", api);

// handle middlewares errors
app.use((req, res, next) => {
  const message = "These arent the Droids youre looking for ";

  logger.info(message);

  res.status(404);
  res.json({
    error: true,
    message
  });
});

module.exports = app;
