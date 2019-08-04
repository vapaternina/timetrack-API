const { Model, fields } = require("./model");

exports.all = (req, res, next) => {
  res.send("Users route");
};

exports.create = (req, res, next) => {
  const { body } = req;

  const document = new Model(body);

  document
    .save()
    .then(doc => {
      res.status(201);
      res.json({
        success: true,
        item: doc
      });
    })
    .catch(err => {
      next(new Error(err));
    });
};
