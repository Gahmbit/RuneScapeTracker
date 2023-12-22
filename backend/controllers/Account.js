import Snapshot from "../models/Snapshot";
const mongoose = require("mongoose");
require("dotenv").config();
const secret = process.env.MONGO_SECRET;
const snapshotGap = 43200000;

//INITIALIZE AND CONNECT TO DB
mongoose.set("strictQuery", false);

const connectDB = async (secret) => {
  await mongoose.connect(secret);
  console.log("Accounts Controller: Connected to MongoDB");
};

connectDB(secret);


//CONTROLLER FUNCTIONS
async function getAccount(account) {
    const userData = await fetch(
      `https://apps.runescape.com/runemetrics/profile/profile?user=${account}&activities=20`
    );
    const userJSON = await userData.json();
    return userJSON;
  }

export function transformSnapshot(account){
    const skillsArray = account.skillvalues;
  const skillsObj = {};
  skillsArray.forEach((skill) => {
    skillsObj[skill.id] = {
      level: skill.level,
      xp: skill.xp,
      rank: skill.rank,
    };
  });

  const accountRank = account.rank
    ? parseInt(account.rank.replace(/,/g, ""))
    : 0;
  const snap = {
    name: account.name,
    nameLower: account.name.toLowerCase(),
    rank: accountRank,
    totalSkill: account.totalskill,
    totalExp: account.totalxp,
    combatLevel: account.combatlevel,
    activities: account.activities,
    skills: skillsObj,
  };
  return snap;
}

async function canSnap(account) {
    const latestSnap = await Snapshot.find({ name: account.name })
      .sort({ timestamp: -1 })
      .limit(1);
    // await console.log(latestSnap);
    if (
      latestSnap[0] === undefined ||
      Date.now() - latestSnap[0].timestamp >= snapshotGap
    ) {
      takeSnapshot(account);
    }
  }

const takeSnapshot = (snap) => {
    const newSnap = new Snapshot(snap);
    newSnap.save();
    console.log(`Added ${snap.name} to the database at ${snap.timestamp}`);
}

async function getSnapshots(account) {
    const mySnapshots = await Snapshot.find({ name: account }).sort({
      timestamp: -1,
    });
    if (
      (mySnapshots === null) |
      (mySnapshots === undefined) |
      (mySnapshots === null)
    ) {
      return `There are currently no snapshots for ${account.name}`;
    }
    console.log(mySnapshots);
    return mySnapshots;
  }