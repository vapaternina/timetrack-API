const { sign, verify } = require("jsonwebtoken");

const config = require("./../../config");

const { secret, expires } = config.token;

const signToken = (payload, expiresIn = expires) =>
  sign(payload, secret, {
    algorithm: "HS256",
    expiresIn
  });

const auth = (req, res, next) => {
  let token = req.headers.authorization || req.query.token || "";

  if (token.starstWith("Bearer ")) {
    token = token.substring(7);
  }

  if (!token) {
    const message = "Unauthorized";

    next({
      success: false,
      message,
      statusCode: 401,
      level: "info"
    });
  } else {
    verify(token, config.token.secret, (err, decoded) => {
      if (err) {
        const message = "Unauthorized";

        next({
          success: false,
          message,
          statusCode: 401,
          level: "info"
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
};

module.exports = {
  signToken,
  auth
};
