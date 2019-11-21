var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

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

RegistraConsul();

//Registra a API no service Discovery Consul
function RegistraConsul() {
  var request = require('request');

  var headers = {
    'Content-Type': 'text/plain'
  };

  // Definição do serviço a ser registrado no Consul
  var dataString = JSON.stringify({
    "id": "API-Pagamentos1",
    "name": "API-Pagamentos",
    "tags": [
      "node.js"
    ],
    "address": "http://localhost",
    "port": 3000,
    "checks": [
      {
        "id": "Checagem da API-Pagamentos",
        "http": "http://localhost:3004/pagamentos/health",
        "interval": "5s"
      }
    ]
  });

  var options = {
    url: 'http://localhost:8500/v1/agent/service/register',
    method: 'PUT',
    headers: headers,
    body: dataString
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  }

  request(options, callback);
}

module.exports = app;
