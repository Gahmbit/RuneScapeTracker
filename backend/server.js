const express = require("express");
const accountRouter = require("./routes/Account");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

//Rate Limiter Settings (Currently 60 requests per 10 minutes)
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 60,
});

//Middleware
app.set("trust proxy", 1);
app.use(cors());
app.use(limiter);
app.use((req, res, next) => {
  console.log(`${req.method} request at ${req.url}, from ${req.ip}`);
  next();
})

app.get("/", (req, res) => {
  res.send("working!");
});

//routers
app.use("/account", accountRouter);

app.listen(port, () => {
  console.log(`Express: Listening on Port ${port}`);
});
