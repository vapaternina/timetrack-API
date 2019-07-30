var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  customer: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
  },
  start_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  members: [],
  last_update_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  estimated_end_date: {
    type: Date,
  },
  estimated_hours: {
    type: Number,
    required: true,
  },
  current_hours_spent: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = Project = mongoose.model('project', projectSchema);
