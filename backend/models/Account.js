const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  dateAdded: {
    //Literally just wanna track when accounts get added, not used in app
    type: Date,
    default: Date.now,
    immutable: true,
  },
  avatarURL: String, //http://secure.runescape.com/m=avatar-rs/X/chat.png, where X is username, use %20 for spaces
});

module.exports = mongoose.model("Account", AccountSchema);
