var express = require("express");
var router = express.Router();
var bets_controller = require("../controllers/betsController");

router.get("/", bets_controller.index);
router.post("/create", bets_controller.bet_create_post);

module.exports = router;
