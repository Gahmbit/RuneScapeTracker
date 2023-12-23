const Snapshot = require("../models/Snapshot");
// const express = require("express");
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
const getCurrentStats = (req, res) => {
  getAccount(req.params.account)
    .then((rsData) => {
      if (!rsData) {
        res.status(404);
        res.send(`User "${req.params.account}" not found, please try again!`);
      } else {
        res.status(200);
        res.send(rsData);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Database Error: Please Try Again!");
    });
};

const getAllStats = (req, res) => {
  getAccount(req.params.account)
    .then((rsData) => {
      if (!rsData || rsData.nameLower === null) {
        res.status(404);
        res.send(`User "${req.params.account}" not found, please try again!`);
      } else {
        getSnapshots(rsData)
          .then((snaps) => {
            if (!snaps || snaps.length === 0) {
              res.status(404);
              res.send(`User "${req.params.account}" has no data saved!`);
            } else {
              res.status(200).send(snaps);
            }
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send("Database Error: Please Try Again!");
          });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Database Error: Please Try Again!");
    });
};

const saveCurrentStats = (req, res) => {
  getAccount(req.params.account).then((rsData) => {
    if (!rsData) {
      res.status(404).send("User not found, please try again");
    } else {
      canSnap(rsData)
        .then((snappable) => {
          // console.log(snappable);
          if (snappable) {
            res.status(201);
            takeSnapshot(rsData);
            let timestamp = Date.now();
            res.send(
              `Saved ${rsData.name}'s data at ${new Date(
                timestamp
              ).toISOString()}`
            );
          } else {
            res
              .status(400)
              .send(
                "Unable to Save Data: Can only save once every 12 hours per account, please try again later!"
              );
          }
        })
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.send("Database Error: Unable to Save Data... Sorry!");
        });
    }
  });
};

//HELPER FUNCTIONS
async function getAccount(account) {
  const userData = await fetch(
    `https://apps.runescape.com/runemetrics/profile/profile?user=${account}&activities=20`
  );
  const userJSON = await userData.json();
  // console.log(userJSON);
  if (userJSON.error) return null;
  else return transformSnapshot(userJSON);
}

function transformSnapshot(account) {
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
    : null;
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
  const latestSnap = await Snapshot.find({ nameLower: account.nameLower })
    .sort({ timestamp: -1 })
    .limit(1);
  // await console.log(latestSnap);
  if (
    latestSnap[0] === undefined ||
    Date.now() - latestSnap[0].timestamp >= snapshotGap
  ) {
    // takeSnapshot(account);
    return true;
  } else return false;
}

const takeSnapshot = (snap) => {
  const newSnap = new Snapshot(snap);
  newSnap.save();
  console.log(`Added ${snap.name} to the database at ${Date.now()}`);
};

async function getSnapshots(account) {
  const mySnapshots = await Snapshot.find({
    nameLower: account.nameLower,
  }).sort({
    timestamp: -1,
  });
  if (
    (mySnapshots === null) |
    (mySnapshots === undefined) |
    (mySnapshots[0] === null)
  ) {
    return null;
  }
  console.log(mySnapshots);
  return mySnapshots;
}

module.exports = {
  getCurrentStats,
  saveCurrentStats,
  getAllStats,
};
