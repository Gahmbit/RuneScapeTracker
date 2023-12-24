const express = require("express");
const accountRouter = require("./routes/Account");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

//Rate Limiter Settings (Currently 100 requests per 10 minutes)
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});

//Middleware
app.use(cors());
app.use(limiter);

app.get("/", (req, res) => {
  res.send("working!");
});

//routers
app.use("/account", accountRouter);

app.listen(port, () => {
  console.log(`Express: Listening on Port ${port}`);
});
