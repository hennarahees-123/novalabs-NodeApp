// var router = express.Router();
// var express = require('express');
const router = require('express').Router();
const sellerController = require("./seller.controller");

router.get('/',sellerController.listSellers);

module.exports = router;