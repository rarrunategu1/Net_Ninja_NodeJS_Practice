var express = require('express');

var app = express(); //this will allow us to fire the express function using the variable app

app.get('/', function(req, res){ //express has added these functions and added functionalities
  res.send('this is the homepage');
});
app.get('/contact', function(req, res){ //express has added these functions and added functionalities
  res.send('this is the contact page');
});

app.get('/profile/:id', function(req, res){ //if you change the :id to :name you just change it to req.params.name on following line
  res.send('You requested to see a profile with the id of ' + req.params.id); //req.params.id = is asking for the parameter id in the request
})

app.listen(process.env.PORT, process.env.IP, 3000);



