var express = require('express');
const fs = require('fs');
var app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public', 
{
  gzip:true,
  setHeaders: (res, path) => {
    if(path.endsWith('.wasm.gz'))
      res.set('Content-Type', 'application/wasm');
    if (path.endsWith('.gz'))
      res.set('Content-Encoding', 'gzip');
  }
}));

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

app.get('/datenschutz', (req, res)=> res.render('pages/datenschutz'));
app.get('/impressum', (req, res)=> res.render('pages/impressum'));
app.get('/cookies', (req, res)=> res.render('pages/cookies'));
app.get('/showcases', (req, res)=> res.render('pages/showcases'));
app.get('/assetbundles/demo', (req, res)=> res.sendFile(`${__dirname}/public/content/assetbundles/demo`));

app.post('/submit-contact-form', async(req, res)=>{

  try{

    const formContent = req.body;
    const europeanTime = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' });
    await fs.promises.writeFile(`${__dirname}/inquiries/${europeanTime}_${formContent.name}.txt`, JSON.stringify(formContent));
    res.json({error: false, message:"Die Kontaktanfrage ist zugestellt. Wir melden uns zeitnah bei dir!"});
  }
  catch(err){
    console.error(err);
    res.json({error:true, message:'Ein Error ist beim versenden aufgetreten. Sende uns deine Anfrage gerne an info@quilar.de.'});
  }

});

app.use((req, res)=>{
    res.status(404).render('pages/404');
});


app.listen(8080);
console.log('Server is listening on port 8080');