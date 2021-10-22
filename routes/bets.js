var express = require("express");
var router = express.Router();
var bets_controller = require("../controllers/betsController");

router.get("/", bets_controller.index);

module.exports = router;
