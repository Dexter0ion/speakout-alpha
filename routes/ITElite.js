var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ITElite', { title: 'IT Elite' });
});

router.post('/volunteerForm', function(req, res, next) {
    res.redirect('/volunteerForm');
  });
module.exports = router;
