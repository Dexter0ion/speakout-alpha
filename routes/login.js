var express = require('express');
var router = express.Router();


//跳转登陆界面
router.get('/', function (req, res, next) {
  res.render('login', { title: '登陆' });
});

router.post('/Formsubmit', function (req, res) {
  console.log('loginFromSubmit');
  console.log('username:'+req.body.username);
  console.log('password'+req.body.password);
  res.redirect('/typeInfo');
})
module.exports = router;