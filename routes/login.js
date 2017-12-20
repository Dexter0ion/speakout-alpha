var express = require('express');
var router = express.Router();
var localUsers = require('../public/js/localUsers.js').items;
var session = require('express-session');


//session设置


var findUser = function (name, password) {
  var userFind = localUsers.find(function (item) {
    return item.name == name && item.password == password;
  });

  if (!userFind)
    return false;
  else if (userFind)
    return true;

}
//跳转登陆界面
router.get('/', function (req, res, next) {
  res.render('login', { title: '登陆' });
});


router.post('/Formsubmit', function (req, res, next) {
  //要加next
  var loginSuccess = findUser(req.body.username, req.body.password);
  //数据库中有用户信息 存储session 跳转填写界面
  console.log(findUser(req.body.username, req.body.password));
  console.log('loginFromSubmit');
  if (loginSuccess == true) {
    req.session.sign = true;
    req.session.name = req.body.username;
    res.redirect('/typeInfo');
  }
  else {
    res.redirect('/login');
  }
})

module.exports = router;

