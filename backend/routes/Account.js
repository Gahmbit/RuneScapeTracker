const express = require("express");
const router = express.Router();
const Snapshot = require("../models/Snapshot");
const controller = require("../controllers/Account");

router.get("/", (req, res) => {
  res.send("Please request a specific account!");
  console.log(`GET request @ /accounts/, from ${req.ip}`);
});

router.get("/:account", (req, res) => {
  controller.getCurrentStats(req, res);
});

router.post("/:account", (req, res) => {
  controller.saveCurrentStats(req, res);
});

// router.get("/:account", (req, res) => {
//   getAccount(`${req.params.account}`)
//     .then((account) => {
//       console.log(account.name);
//       if (account.name === undefined) {
//         res.send(
//           "User not found / private, please try another RuneScape account."
//         );
//         console.log(
//           `GET request @ /accounts/${req.params.account} (user not found), from ${req.ip}`
//         );
//         return;
//       }
//       res.send(account);
//       canSnap(account);
//       console.log(
//         `GET request @ /accounts/${req.params.account}, from ${req.ip}`
//       );
//     })
//     .catch((err) => {
//       res.send(err);
//       console.log(err);
//     });
// });

// router.get("/:account/all", (req, res) => {
//   getSnapshots(req.params.account).then((snaps) => {
//     res.send(snaps);
//     console.log(snaps);
//     console.log(
//       `GET request @ /accounts/${req.params.account}/all, from ${req.ip}`
//     );
//   });
// });

module.exports = router;
