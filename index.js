const express = require('express');
const app = express();
const hbs = require('hbs')

app.use(express.static(__dirname + '/public'));

// HBS

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/',(req,res) => {
  res.render('home');
});

app.get('/register',(req,res) => {
  res.render('register');
});

app.listen(3000,() => {
  console.log("Escuchando en el puerto 3000...");
})
