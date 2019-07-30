require("dotenv").config("");

const config = {
  server: {
    hostname: process.env.SERVER_IP,
    port: process.env.PORT
  },
  db: {
    uri: process.env.DB_URI
  }
};

module.exports = config;
