var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res) {
  res.render("home.ejs");
});

app.get('/posts', function(req, res) {
  var posts = [
    {title: "My first post", author: 'Kevin'},
    {title: "Another post", author: 'Kevin'},
    {title: "Last post", author: 'Kevin'}
  ];
  res.render('posts.ejs', {posts: posts});
});

app.get('/picture/:tag', function(req, res) {
  var tag = req.params.tag;
  res.render('picture.ejs', { tag: tag });
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
  var word = req.params.word;
  var times = Number(req.params.times);
  for (var count = 0; count < times; count++) {
    response += word + " ";
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