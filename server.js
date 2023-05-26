var express = require('express');
const fs = require('fs');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));

// use res.render to load up an ejs view file

// index page
app.get('/', async(req, res) => {
  console.log("request incoming");
try{
  const news = await fs.promises.readFile(`${__dirname}/public/content/news/news.json`);
  const testimonials = await fs.promises.readFile(`${__dirname}/public/content/testimonials/testimonies.json`);
  
  if(news && testimonials) res.render('pages/index', {news: JSON.parse(news), testimonials: JSON.parse(testimonials)});
  else throw Error("Ein Server Error ist aufgetreten");
}
catch(err){
  res.status(404).render(404);
}
  
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