const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Skill = require("./Skill");

//WIP, easier finding skills this way than below
const skillMap = {
  attack: 0,
  defence: 1,
  strength: 2,
  constitution: 3,
  ranged: 4,
  prayer: 5,
  magic: 6,
  cooking: 7,
  woodcutting: 8,
  fletching: 9,
  fishing: 10,
  firemaking: 11,
  crafting: 12,
  smithing: 13,
  mining: 14,
  herblore: 15,
  agility: 16,
  thieving: 17,
  slayer: 18,
  farming: 19,
  runecrafting: 20,
  hunter: 21,
  construction: 22,
  summoning: 23,
  dungeoneering: 24,
  divination: 25,
  invention: 26,
  archaeology: 27,
  necromancy: 28,
};

//all below data acquired via https://apps.runescape.com/runemetrics/profile/profile?user=X&activities=20, unless stated otherwise
const SnapshotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nameLower: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  rank: Number,
  totalSkill: Number,
  totalExp: Number,
  combatLevel: Number,
  activities: Array,
  questPoints: Number, //acquired via https://apps.runescape.com/runemetrics/quests?user=X
  skills: Object,
});

module.exports = new mongoose.model("Snapshot", SnapshotSchema);
