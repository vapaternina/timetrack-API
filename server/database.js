const mongoose = require("mongoose");
const config = require("./config");

console.log(config.server);
const connectDB = async () => {
  try {
    await mongoose.connect(config.db.uri, { useNewUrlParser: true });

    console.log("Conectado exitosamente a la base de datos");
  } catch (err) {
    console.error(err.message);

    //Salir del proceso con fallo
    process.exit(1);
  }
};

module.exports = connectDB;
