var express = require('express');
var router = express.Router();
var session = require('express-session');
//set session
/*
secret:通过secret字符串，计算hash值之后存贮在cookie中 
      以防止singnedCookie被篡改
cookie：设置存放session id的cookie相关选项，默认为：
  (default:{
    path:'/',
    httpOnly:true,
    secure:false,
    maxAge:null
  })
*/
router.use(session({
  secret: 'test secret',
  cokkie: { maxAge: 60 * 1000 * 300 } //过期时间 ms
}))

//process session
router.get('/',function(req,res){
  //session 已经登陆
  if(req.session.sign){
    //console.log(req.session);
    //res.send('<strong>'+req.session.name+'</strong>'+'Nice to see you again');
    res.render('typeInfo', { title: 'typeInfo' });
    
  }
  res.render('index', { title: 'Express' });

});

/*
/* GET home page. 
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

module.exports = router;
