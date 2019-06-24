var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var passport = require('passport')
var session = require('express-session');

// rotas em uso

//var telegramBotRouter = require('./routes/telegram_bot');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
//var bancoRouter = require('./routes/banco');
//var cadastroRouter = require('./routes/cadastro');
//var edicaoRouter = require('./routes/edicao');
//var dashboardRouter = require('./routes/dashboard');
//var analyticsRouter = require('./routes/analytics');

//require('./routes/auth')(passport);


// passport e session config 

const app = express();

app.use(session({
  secret: 'myproject2022',//configure um segredo seu aqui
  resave: false,
  saveUninitialized: false,
  cookie:{_expires : 3600000}
}));



app.use(passport.initialize());
app.use(passport.session());



// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use('/banco', bancoRouter);
//app.use('/cadastro', cadastroRouter);
//app.use('/edicao', edicaoRouter);
//app.use('/dashboard', dashboardRouter);
//app.use('/analytics', analyticsRouter);
//app.use('/telegram_bot', telegramBotRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
