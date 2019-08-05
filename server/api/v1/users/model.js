const mongoose = require("mongoose");

const { Schema } = mongoose;

const fields = {
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  roles: {
    type: Number,
    default: 0
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  passwordResetToken: {
    type: String
  },
  passwordResetExpires: {
    type: String
  }
};

const user = new Schema(fields, { timestamps: true });

/*const virtuals = {
  teams: {
    ref: "team",
    localField: "_id",
    foreingField: "members"
  }
};

user.virtual("teams", virtuals.teams);*/

module.exports = {
  Model: mongoose.model("user", user),
  fields
};
