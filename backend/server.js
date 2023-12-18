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
  console.log("pinged at /");
});
//Below code is just to test api calling > it works lol
async function findUser(account) {
  const userData = await fetch(
    `https://apps.runescape.com/runemetrics/profile/profile?user=${account}&activities=20`
  );
  const userJSON = await userData.json();
  return userJSON;
}

app.get("/:id", (req, res) => {
  findUser(`${req.params.id}`)
    .then((userData) => {
      res.send(userData);
      console.log(`Showing data for "${req.params.id}", from ${req.ip}`);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
});
// testing ends here
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
