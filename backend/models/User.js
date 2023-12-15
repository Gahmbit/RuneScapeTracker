const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  accounts: Array,
});

module.exports = mongoose.model("User", UserSchema);
