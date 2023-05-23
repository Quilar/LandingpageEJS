var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  console.log("request incoming");
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.use((req, res)=>{
    res.status(404).render('pages/404');
});


app.listen(8080);
console.log('Server is listening on port 8080');