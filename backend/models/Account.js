const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  addedBy: String,
  snapshots: Array,
  avatarURL: String,
});

module.exports = mongoose.model("Account", AccountSchema);
