const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("home", { title: 'Home' });
});

app.get('/routes', (req, res) => {
  res.send(app._router.stack);
});

app.get('/posts', (req, res) => {
  const posts = [
    {title: "My first post", author: 'Kevin'},
    {title: "Another post", author: 'Kevin'},
    {title: "Last post", author: 'Kevin'}
  ];
  res.render('posts', { posts: posts, title: 'Posts' });
});

app.get('/picture/:tag', (req, res) => {
  const tag = req.params.tag;
  res.render('picture', { tag: tag, title: `Picture with tag: ${tag}` });
});

app.get('/speak/:animal', (req, res) => {
  const animal = req.params.animal.toLowerCase();
  const sounds = {
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

app.get('/repeat/:word/:times', (req, res) => {
  let response = '';
  const word = req.params.word;
  let times = Number(req.params.times);
  for (let count = 0; count < times; count++) {
    response += word + " ";
  }
  res.send(response);
});

app.get('/page/:myPage', (req, res) => {
  res.send('Welcome to page: ' + req.params.myPage);
})

app.get('*', (req, res) => {
  res.status(404);
  res.send('Route not found: ' + req.url);
});

app.listen(port, function() {
  console.log('Server running on port ' + port);
})
