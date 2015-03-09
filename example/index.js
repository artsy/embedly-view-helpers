var express = require('express');
var app = express();
var helpers = require('../')(process.env.EMBEDLY_KEY);

app.set('views', __dirname);
app.set('view engine', 'jade');
app.locals.crop = helpers.crop;
app.locals.resize = helpers.resize;
app.locals.fill = helpers.fill;

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(4000, function() {
  console.log('listening on 4000');
});