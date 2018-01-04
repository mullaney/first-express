var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res) {
  res.send('Hello world!');
});

app.get('/page/:myPage', function(req, res) {
  res.send('Welcome to page: ' + req.params.myPage);
})

app.get('*', function(req, res) {
  res.status(404);
  res.send('Route not found: ' + req.url);
});

app.listen(port, function() {
  console.log('Server running on port ' + port);
})