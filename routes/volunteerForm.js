var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//跳转登陆界面
router.get('/', function (req, res, next) {
  res.render('volunteerForm', { title: '填写志愿 ' });
});

router.post('/FormSubmit', function (req, res) {
  var memberName = req.body.memberName;
  var memberEduId = req.body.memberEduId;
  var memberPhone = req.body.memberPhone;
  var fistChoice = req.body.firstChoice;
  var secondChoice = req.body.secondChoice;


  var memberVolunInfo = {
    memberName: req.body.memberName,
    memberEduId: req.body.memberEduId,
    memberPhone: req.body.memberPhone,
    firstChoice: req.body.firstChoice,
    secondChoice: req.body.secondChoice
  }

  console.log(memberVolunInfo);

  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: '47.88.16.241',
    user: 'admin',
    password: 'adminpassword',
    database: 'regisdb',
    port: '3306',
    charset: 'UTF8_GENERAL_CI'
  });
  connection.connect();

  /*
    插入信息 并检索学号是否已键入
  */
  var schNumCheck = 0;
  //检索学号
  var schNumberSql = "select * from tblVolunForm where memberEduId = '" + memberEduId + "'";
  connection.query(schNumberSql, memberVolunInfo, function (err, result) {
    if (err) throw err;
    schNumCheck = result.length;
    console.log(schNumCheck);
    if (schNumCheck == 0) {
      //插入数据
      connection.query('insert into tblVolunForm set ?', memberVolunInfo, function (err, result) {
        if (err) throw err;
        console.log('inserted complete');
        console.log(result);
        console.log('\n');

        res.redirect('/submitPass');
       // res.send("填写志愿成功");
        /*
        res.render('success', { title: 'Express' });
        */
      });
    };

    if (schNumCheck > 0) {
      res.redirect('/submitFail');
      //res.send("您的学号"+memberEduId+"已经提交过志愿");
    }

  });
});
module.exports = router;