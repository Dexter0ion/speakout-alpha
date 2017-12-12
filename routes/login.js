var express = require('express');
var router = express.Router();
var localUsers = require('../public/js/localUsers.js').items;


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

router.post('/Formsubmit', function (req, res) {
  console.log(findUser(req.body.username, req.body.password));
  console.log('loginFromSubmit');
  //console.log('username:'+req.body.username);
  //console.log('password'+req.body.password);
  res.redirect('/typeInfo');
})
module.exports = router;