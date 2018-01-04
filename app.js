var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res) {
  res.send('Hello world!');
});

app.get('/speak/:animal', function(req, res) {
  var animal = req.params.animal.toLowerCase();
  var sounds = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Wolf', 
    cat: 'Meow'
  }
  if (sounds[animal] === undefined) {
    res.status(404);
    res.send('Animal not found.')
  } else {
    res.send(`The ${animal} says '${sounds[animal]}'`);
  }
});

app.get('/repeat/:word/:times', function(req, res) {
  var response = '';
  for (var count = 0; count < req.params.times; count++) {
    response += req.params.word + " ";
  }
  res.send(response);
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