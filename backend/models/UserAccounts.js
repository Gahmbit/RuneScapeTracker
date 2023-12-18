const mongoose = require("mongoose");

const UserAccount = new mongoose.Schema({
  userID: mongoose.Schema.Types.ObjectId,
  accountID: mongoose.Schema.Types.ObjectId,
});

module.exports = new mongoose.model("UserAccount", UserAccount);
