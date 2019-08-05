require("dotenv").config("");

const config = {
  server: {
    hostname: process.env.SERVER_IP,
    port: process.env.SERVER_PORT
  },
  db: {
    uri: process.env.DB_URI
  },
  token: {
    secret: process.env.TOKEN_SECRET,
    expires: process.env.TOKEN_EXPIRES
  }
};

module.exports = config;
