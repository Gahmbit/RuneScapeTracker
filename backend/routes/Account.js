const express = require("express");
const router = express.Router();

async function getAccount(account) {
  const userData = await fetch(
    `https://apps.runescape.com/runemetrics/profile/profile?user=${account}&activities=20`
  );
  const userJSON = await userData.json();
  return userJSON;
}

router.get("/", (req, res) => {
  res.send("Please request a specific account!");
  console.log(`GET request @ /accounts/, from ${req.ip}`);
});

router.get("/:account", (req, res) => {
  getAccount(`${req.params.account}`)
    .then((account) => {
      res.send(account);
      console.log(
        `GET request @ /accounts/${req.params.account}, from ${req.ip}`
      );
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
});

module.exports = router;
