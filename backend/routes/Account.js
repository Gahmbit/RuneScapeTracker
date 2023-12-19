const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Snapshot = require("../models/Snapshot");
require("dotenv").config({ path: __dirname + "./../vars/.env" });
const secret = process.env.MONGO_SECRET;

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

const takeSnapshot = (account) => {
  //need to add logic that finds all snapshots, grabs most recent one, and compares with current time
  //if current time - most recent snapshot is greater than 12 hours (43200000 ms), take another snapshot
  const snap = new Snapshot({
    name: account.name,
    rank: account.rank,
    totalSkill: account.totalskill,
    totalExp: account.totalxp,
    combatLevel: account.combatlevel,
    activities: account.activities,
    //need to add skills to snapshots
  });
  snap.save();
  console.log(snap);
};

router.get("/", (req, res) => {
  res.send("Please request a specific account!");
  console.log(`GET request @ /accounts/, from ${req.ip}`);
});

router.get("/all/:account", (req, res) => {
  res.send(`viewing all snapshots for account ${req.params.account}`);
  console.log(
    `GET request @ /accounts/all/${req.params.account}, from ${req.ip}`
  );
});

router.get("/current/:account", (req, res) => {
  getAccount(`${req.params.account}`)
    .then((account) => {
      console.log(account.name);
      if (account.name === undefined) {
        res.send(
          "User not found / private, please try another RuneScape account."
        );
        console.log(
          `GET request @ /accounts/current/${req.params.account} (user not found), from ${req.ip}`
        );
        return;
      }
      res.send(account);
      takeSnapshot(account);
      console.log(
        `GET request @ /accounts/current/${req.params.account}, from ${req.ip}`
      );
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
});

module.exports = router;
