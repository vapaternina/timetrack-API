const express = require("express");
const connectDB = require("./config/database");

const app = express();

//  Conexion a BD
connectDB();

app.get("/", (req, res) => res.send("API ejecutandose correctamente"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
