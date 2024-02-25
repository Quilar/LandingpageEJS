var express = require('express');
const fs = require('fs');
var app = express();
const bodyParser = require('body-parser');
const thirtyDays = 24 * 60 * 60 * 1000 * 30;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public', 
{
  maxAge: thirtyDays,
  gzip:true,
  setHeaders: (res, path) => {
    if(path.endsWith('.wasm.gz'))
      res.set('Content-Type', 'application/wasm');
    if (path.endsWith('.gz'))
      res.set('Content-Encoding', 'gzip');
  }
}));

// index page
app.get('/', async (req, res)=> {
  try{
    const file = await fs.promises.readFile(`${__dirname}/public/content/faq/faq.json`);
    if(!file) throw Error();
    else
      res.render('pages/index', {faqs: JSON.parse(file).faqs});
  }
  catch(err){
    res.status(404).render(404);
  }
    
  });
  
  app.get('/about', (req, res)=>res.render('pages/about'));
  app.get('/hometour', (req, res)=> res.render('pages/hometour'));
  app.get('/contact', (req, res)=> res.render('pages/contact'));
  app.get('/danke', (req, res)=> res.render('pages/thankyou'));
  app.get('/datenschutz', (req, res)=> res.render('pages/datenschutz'));
  app.get('/impressum', (req, res)=> res.render('pages/impressum'));
  app.get('/nutzungsbedingungen', (req, res)=> res.render('pages/AGB'));
  app.get('/cookies', (req, res)=> res.render('pages/cookies'));
  // blog page
  const blogRouter = require('./routes/blog-router.js');
  app.use('/blog', blogRouter);
  

app.use((req, res)=>{
    res.status(404).render('pages/404');
});


app.listen(8080);
console.log('Server is listening on port 8080');