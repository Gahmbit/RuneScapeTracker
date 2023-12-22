const express = require("express");
const mongoose = require("mongoose");
const accountRouter = require("./routes/Account");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("working!");
  console.log(`GET request @ /, from ${req.ip}`);
});

//routers
app.use("/account", accountRouter);

app.listen(port, () => {
  console.log(`Express: Listening on Port ${port}`);
});
