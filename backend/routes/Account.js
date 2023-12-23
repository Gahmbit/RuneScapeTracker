const express = require("express");
const router = express.Router();
const controller = require("../controllers/Account");

router.get("/", (req, res) => {
  res.send("Please request a specific account!");
});

router.get("/:account", (req, res) => {
  controller.getCurrentStats(req, res);
});

router.post("/:account", (req, res) => {
  controller.saveCurrentStats(req, res);
});

router.get("/:account/all", (req, res) => {
  controller.getAllStats(req, res);
});

module.exports = router;
