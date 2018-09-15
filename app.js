var express = require('express');

var app = express(); //this will allow us to fire the express function using the variable app

app.get('/', function(req, res){ //express has added these functions and added functionalities
  res.send('this is the homepage');
});
app.get('/contact', function(req, res){ //express has added these functions and added functionalities
  res.send('this is the contact page');
});

app.listen(process.env.PORT, process.env.IP, 3000);



