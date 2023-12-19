const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  level: Number,
  experience: Number,
  rank: Number,
});

module.exports = mongoose.model("Skill", SkillSchemaSchema);
