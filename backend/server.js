const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: __dirname + "/vars/.env" });

const app = express();
const port = process.env.PORT || 3000;
const secret = process.env.MONGO_SECRET;

mongoose.set("strictQuery", false);
const connectDB = async () => {
  await mongoose.connect(secret);
  console.log("connected to MongoDB");
};

connectDB();

app.get("/", (req, res) => {
  res.send("working!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
