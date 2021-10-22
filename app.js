const express = require("express");
const app = express();
const betsRouter = require("./routes/bets");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/bets", betsRouter);

module.exports = app;
