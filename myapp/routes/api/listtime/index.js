const router = require('express').Router();
const listtimeController = require("./listtime.controller");

// router.get('/',listtimeController.listListTimes);
 router.get('/:id',listtimeController.getListTime);

module.exports = router;