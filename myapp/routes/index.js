//  var express = require('express');
//  var router = express.Router();
//  require("./api/seller");

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Henna' });
// });

// module.exports = router;
 'use strict'

module.exports = function(app){
   app.use('/api/seller',require('./api/seller'));
   app.use('/api/timeslot',require('./api/timeslot'));

 app.use('/api/listtime',require('./api/listtime'));
}
