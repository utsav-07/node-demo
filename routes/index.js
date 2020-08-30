var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    message: "express js starter project",
    welcome: "swagatam To utsav",
  });
});

router.get("/getimage", function (req, res, next) {
  res.render("viewimage", {
    title: "Gallery",
    msg: "Welcome To My Gallery",
  });
});

module.exports = router;
