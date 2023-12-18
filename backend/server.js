const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/vars/.env" });
const accountRouter = require("./routes/Account");

const app = express();
const port = process.env.PORT || 3000;
const secret = process.env.MONGO_SECRET;

mongoose.set("strictQuery", false);
const connectDB = async () => {
  await mongoose.connect(secret);
  console.log("Online: Connected to MongoDB");
};

connectDB();

app.get("/", (req, res) => {
  res.send("working!");
  console.log(`GET request @ /, from ${req.ip}`);
});

//routers
app.use("/accounts", accountRouter);

app.listen(port, () => {
  console.log(`Online: Listening on port ${port}`);
});
