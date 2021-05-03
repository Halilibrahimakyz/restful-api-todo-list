const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');

const indexRouter = require('./routes/index');
const todo = require('./routes/todo');
const todoid=require('./routes/todoid');
const app = express();
//db bağlantı

const db = require('./helper/db')();
//Config
const config=require('./config');

//Middleware
const verifyToken=require('./middleware/verify-token');

app.set('api_secret_key',config.api_secret_key);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api',verifyToken);
app.use('/api/todolist', todo);
app.use('/api/todolistid', todoid);
// catch 404 and forward to error handler
app.use((req, res, next)=> {
  next(createError(404));
});




// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.json({ error: { message: err.message, code: err.code } });


});


module.exports = app;
