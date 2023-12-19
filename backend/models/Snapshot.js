const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Skill = require("./Skill");

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
  rank: Number,
  totalSkill: Number,
  totalExp: Number,
  combatLevel: Number,
  activities: Array,
  questPoints: Number, //acquired via https://apps.runescape.com/runemetrics/quests?user=X
  attack: Skill,
  defence: Skill,
  strength: Skill,
  constitution: Skill,
  ranged: Skill,
  prayer: Skill,
  magic: Skill,
  cooking: Skill,
  woodcutting: Skill,
  fletching: Skill,
  fishing: Skill,
  firemaking: Skill,
  crafting: Skill,
  smithing: Skill,
  mining: Skill,
  herblore: Skill,
  agility: Skill,
  thieving: Skill,
  slayer: Skill,
  farming: Skill,
  runecrafting: Skill,
  hunter: Skill,
  construction: Skill,
  summoning: Skill,
  dungeoneering: Skill,
  divination: Skill,
  invention: Skill,
  archaeology: Skill,
  necromancy: Skill,
});

module.exports = new mongoose.model("Snapshot", SnapshotSchema);
