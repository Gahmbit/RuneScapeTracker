const express = require("express");
const mongoose = require("mongoose");
const accountRouter = require("./routes/Account");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("working!");
  console.log(`GET request @ /, from ${req.ip}`);
});

//routers
app.use("/account", accountRouter);

app.listen(port, () => {
  console.log(`Express: Listening on Port ${port}`);
});
