const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./vars/.env" });

const app = express();
const port = process.env.PORT || 3000;
const secret = process.env.MONGO_SECRET;

app.get("/", (req, res) => {
  res.send("working!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
