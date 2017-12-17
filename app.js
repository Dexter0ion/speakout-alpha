var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
//登陆 路由
var login = require('./routes/login');
var typeInfo = require('./routes/typeInfo');
var typeInfoBack = require('./routes/typeInfoBack');
var volunteerForm = require('./routes/volunteerForm');
var submitPass = require('./routes/submitPass');
var submitFail = require('./routes/submitFail');

var ejs = require('ejs');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.engine('html', ejs.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);
app.use('/login', login);
app.use('/typeInfo', typeInfo);
app.use('/typeInfoBack', typeInfoBack);
app.use('/volunteerForm',volunteerForm);
app.use('/submitPass',submitPass);
app.use('/submitFail',submitFail);



app.post('/test', function (req, res) {
  console.log(req.query.id);
  console.log(req.body.name);
  console.log(req.body.tel);
});

app.post('/logout',function(req,res){
  res.redirect('/login');
})

app.get('/loadUserName',function(req,res){
  console.log("AJAX LOAD USERNAME");
  console.log(req.session.name);
  res.send(req.session.name);
})





module.exports = app;
