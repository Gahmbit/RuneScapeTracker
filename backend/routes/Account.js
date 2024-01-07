const express = require("express");
const router = express.Router();
const controller = require("../controllers/Account");
const apiCache = require("apicache");

const cache = apiCache.middleware;

router.get("/", cache("60 minutes"), (req, res) => {
    res.send("Please request a specific account!");
});

router.get("/:account", cache("2 minutes"), (req, res) => {
    controller.getCurrentStats(req, res);
});

router.post("/:account", cache("2 minutes"), (req, res) => {
    controller.saveCurrentStats(req, res);
});

router.get("/:account/all", cache("2 minutes"), (req, res) => {
    controller.getAllStats(req, res);
});

router.get("/:account/:id", cache("2 minutes"), (req, res) => {
    controller.getOneSnapshot(req, res);
});

module.exports = router;
