const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: process.env.HOSTNAME,
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

exports.bet_create_post = function (req, res, next) {
  var amount = req.body.amount;
  var teamName = req.body.teamName;
  console.log(req.body);
  Bet.create({ teamName: teamName, amount: amount })
    .then((bet) => res.send({ message: "bet created successfully", bet: bet }))
    .catch((err) => res.status(400).json({ err: `Error listing bets ${err}` }));
};

exports.bet_delete_post = function (req, res, next) {
  var bet_id = req.params.id;
  Bet.destroy({ where: { id: bet_id } })
    .then((bet) =>
      res.send({ message: "bet destroyed successfully", bet: bet })
    )
    .catch((err) => res.status(400).json({ err: `Error deleting ${err}` }));
};
