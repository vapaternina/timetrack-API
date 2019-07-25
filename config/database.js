const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });

    console.log("Conectado exitosamente a la base de datos");
  } catch (err) {
    console.error(err.message);

    //Salir del proceso con fallo
    process.exit(1);
  }
};

module.exports = connectDB;
