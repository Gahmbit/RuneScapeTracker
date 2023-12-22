const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Snapshot = require("../models/Snapshot");
require("dotenv").config();
const secret = process.env.MONGO_SECRET;
const snapshotGap = 43200000;

mongoose.set("strictQuery", false);
const connectDB = async (secret) => {
  await mongoose.connect(secret);
  console.log("Accounts: Connected to MongoDB");
};

connectDB(secret);

async function getAccount(account) {
  const userData = await fetch(
    `https://apps.runescape.com/runemetrics/profile/profile?user=${account}&activities=20`
  );
  const userJSON = await userData.json();
  return userJSON;
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

const takeSnapshot = (account) => {
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
  const snap = new Snapshot({
    name: account.name.toLowerCase(),
    rank: accountRank,
    totalSkill: account.totalskill,
    totalExp: account.totalxp,
    combatLevel: account.combatlevel,
    activities: account.activities,
    skills: skillsObj,
  });
  snap.save();
  console.log(snap);
  console.log(`Added ${snap.name} to the database at ${snap.timestamp}`);
};

router.get("/", (req, res) => {
  res.send("Please request a specific account!");
  console.log(`GET request @ /accounts/, from ${req.ip}`);
});

router.get("/:account", (req, res) => {
  getAccount(`${req.params.account}`)
    .then((account) => {
      console.log(account.name);
      if (account.name === undefined) {
        res.send(
          "User not found / private, please try another RuneScape account."
        );
        console.log(
          `GET request @ /accounts/${req.params.account} (user not found), from ${req.ip}`
        );
        return;
      }
      res.send(account);
      canSnap(account);
      // takeSnapshot(account);
      console.log(
        `GET request @ /accounts/${req.params.account}, from ${req.ip}`
      );
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
});

router.get("/:account/all", (req, res) => {
  getSnapshots(req.params.account).then((snaps) => {
    res.send(snaps);
    console.log(snaps);
    console.log(
      `GET request @ /accounts/${req.params.account}/all, from ${req.ip}`
    );
  });
});

module.exports = router;
