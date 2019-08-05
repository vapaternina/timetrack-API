const bcrypt = require("bcrypt");
const { Model, fields } = require("./model");
const { signToken } = require("./../auth");

exports.all = (req, res, next) => {
  res.send("Users route");
};

exports.signup = async (req, res, next) => {
  const { body } = req;
  const document = new Model(body);

  try {
    const doc = await document.save();
    const { _id } = doc;
    const token = signToken({ _id });

    res.status(201);
    res.json({
      success: true,
      data: doc,
      meta: {
        token
      }
    });
  } catch (err) {
    next(new Error(err));
  }
};
