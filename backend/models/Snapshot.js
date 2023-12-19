const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//all below data acquired via https://apps.runescape.com/runemetrics/profile/profile?user=X&activities=20, unless stated otherwise
const SnapshotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  rank: String,
  totalSkill: Number,
  totalExp: Number,
  combatLevel: Number,
  activities: Array,
  questPoints: Number, //acquired via https://apps.runescape.com/runemetrics/quests?user=X
  skills: {
    type: Map,
    of: new Schema({
      level: Number,
      experience: Number,
      rank: Number,
    }),
  },
});

module.exports = new mongoose.model("Snapshot", SnapshotSchema);
