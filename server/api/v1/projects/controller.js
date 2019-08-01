const { Model, fields, virtuals } = require('./model');

const referencesNames = [Object.getOwnPropertyNames(virtuals)];

exports.id = (req, res, next, id) => {
  Model.findById(id).populate(referencesNames.join(' '));
};
