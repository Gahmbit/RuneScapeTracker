const express = require("express");
const mongoose = require("mongoose");
const accountRouter = require("./routes/Account");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("working!");
  console.log(`GET request @ /, from ${req.ip}`);
});

//routers
app.use("/accounts", accountRouter);

app.listen(port, () => {
  console.log(`Express: Listening on Port ${port}`);
});
