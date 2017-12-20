var express = require('express');
var router = express.Router();
//跳转登陆界面
router.get('/', function (req, res, next) {
  if(req.session.sign){
    res.render('typeInfo', { title: '输入信息 ' });
  }
  else{
    res.redirect('/login');
  }
  
});

router.post('/FormSubmit', function (req, res) {
  var tarName = req.body.targetName;
  var tarQQ = req.body.targetQQ;
  var tarPhone = req.body.targetPhone;
  var tarMessage = req.body.targetMessage;
  var friName = req.body.friendName;
  var friQQ = req.body.friendQQ;
  var friendPhone = req.body.friendPhone;

  var targetInfo = {
    Name: req.body.targetName, 
    QQ: req.body.targetQQ,
    Phone: req.body.targetPhone, 
    Message: req.body.targetMessage,
    friName : req.body.friendName, 
    friQQ : req.body.friendQQ,
    friendPhone : req.body.friendPhone
  }

  console.log(targetInfo);
});


module.exports = router;