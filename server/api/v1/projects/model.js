var mongoose = require('mongoose');

const { Schema } = mongoose;

var fields = {
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  customer: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  status: {
    type: String
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  members: {
    type: [Schema.Types.ObjectId]
  },
  lastUpdateDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  estimatedEndDate: {
    type: Date,
    required: true
  }
};

const projectSchema = new Schema(fields);

/*
const virtuals = {
  users: {
    ref: 'users',
    localField: 'fullName',
    foreignField: 'memberName',
  },
}; 
*/

//projectSchema.virtual('members', virtuals.users);

module.exports = {
  Model: mongoose.model('project', projectSchema),
  fields
};
