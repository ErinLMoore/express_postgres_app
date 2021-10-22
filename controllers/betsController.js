const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("foopballdb_dev", "postgres", "postgres", {
  host: "localhost",
  port: "5432",
  dialect: "postgres",
  logging: false,
});

var BetModel = require("../models/bet");
const Bet = BetModel(sequelize, Sequelize);

exports.index = function (req, res, next) {
  Bet.findAll()
    .then((bets) => res.send(bets))
    .catch((err) => res.status(400).json({ err: `Error listing bets ${err}` }));
};
