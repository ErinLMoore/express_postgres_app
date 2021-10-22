const express = require("express");
const app = express();
const betsRouter = require("./routes/bets");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/bets", betsRouter);

module.exports = app;
