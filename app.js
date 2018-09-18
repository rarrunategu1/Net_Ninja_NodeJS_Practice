var express = require('express');

var app = express(); //this will allow us to fire the express function using the variable app

app.set('view engine', 'ejs'); 
app.get('/', function(req, res){
res.render('index');
});
app.get('/contact', function(req, res){ 
res.render('contact');  //this knows where to look so it will pull the contact.ejs file
});

app.get('/profile/:name', function(req, res){
var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
res.render('viewsprofiles', {person: req.params.name, data: data}); //render basically renders a view to the viewsprofiles.ejs file
}); //pass data to a view by passing object as a 2nd parameter which is number

app.listen(process.env.PORT, process.env.IP);



