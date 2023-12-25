const Snapshot = require("../models/Snapshot");
const mongoose = require("mongoose");
require("dotenv").config();
const secret = process.env.MONGO_SECRET;
const {
  SUCCESS,
  CREATED,
  NOT_ALLOWED,
  NOT_FOUND,
  SERVER_ERROR,
  SAVE_TIMEOUT,
} = require("../consts.js");

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
        res
          .status(NOT_FOUND)
          .send(`User "${req.params.account}" not found, please try again!`);
      } else {
        res.status(SUCCESS).send(rsData);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(SERVER_ERROR).send("Database Error: Please Try Again!");
    });
};

const getAllStats = (req, res) => {
  getAccount(req.params.account)
    .then((rsData) => {
      if (!rsData?.nameLower) {
        res
          .status(NOT_FOUND)
          .send(`User "${req.params.account}" not found, please try again!`);
      } else {
        getSnapshots(rsData)
          .then((snaps) => {
            if (!snaps || snaps.length === 0) {
              res
                .status(NOT_FOUND)
                .send(`User "${req.params.account}" has no data saved!`);
            } else {
              res.status(SUCCESS).send(snaps);
            }
          })
          .catch((err) => {
            console.error(err);
            res.status(SERVER_ERROR).send("Database Error: Please Try Again!");
          });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(SERVER_ERROR).send("Database Error: Please Try Again!");
    });
};

const saveCurrentStats = (req, res) => {
  getAccount(req.params.account).then((rsData) => {
    if (!rsData) {
      res.status(NOT_FOUND).send("User not found, please try again");
    } else {
      canSnap(rsData)
        .then((snappable) => {
          if (snappable) {
            res.status(CREATED);
            takeSnapshot(rsData);
            res.send(
              `Saved ${rsData.name}'s data at ${new Date().toISOString()}`
            );
          } else {
            res
              .status(NOT_ALLOWED)
              .send(
                "Unable to Save Data: Can only save once every 12 hours per account, please try again later!"
              );
          }
        })
        .catch((err) => {
          console.error(err);
          res
            .status(SERVER_ERROR)
            .send("Database Error: Unable to Save Data... Sorry!");
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
  if (!userJSON.error) {
    return transformSnapshot(userJSON);
  }
}

function transformSnapshot(account) {
  const skillsArray = account.skillvalues;
  const skillsObj = {};
  const activitiesArray = account.activities;

  skillsArray.forEach((skill) => {
    skillsObj[skill.id] = {
      level: skill.level,
      xp: skill.xp,
      rank: skill.rank,
    };
  });

  activitiesArray.forEach((act) => {
    const type = act["text"].substring(0, 5).toLowerCase();
    act["type"] = type; //skill, quest, kille | i kil
  });

  const accountRank = account.rank
    ? parseInt(account.rank.replace(/,/g, ""))
    : null;

  return {
    name: account.name,
    nameLower: account.name.toLowerCase(),
    rank: accountRank,
    totalSkill: account.totalskill,
    totalExp: account.totalxp,
    combatLevel: account.combatlevel,
    activities: activitiesArray,
    skills: skillsObj,
  };
}

async function canSnap(account) {
  const latestSnap = await Snapshot.find({ nameLower: account.nameLower })
    .sort({ timestamp: -1 })
    .limit(1);
  return !latestSnap[0] || Date.now() - latestSnap[0].timestamp >= SAVE_TIMEOUT;
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
  if (mySnapshots && mySnapshots?.length) {
    return mySnapshots;
  }
}

module.exports = {
  getCurrentStats,
  saveCurrentStats,
  getAllStats,
};
