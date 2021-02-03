const { notStrictEqual } = require('assert');
const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, "views/assets")));
// app.use(helmet());



app.get('/', (res,req) => {  
  req.render('home');  
});

app.get('/menu', (res,req) => {
  req.render('menu');
});


app.get('/covid', (req,res) => {
  res.render('covid');
});



app.listen(3000, () => {
  console.log("ON PORT 3000")
});