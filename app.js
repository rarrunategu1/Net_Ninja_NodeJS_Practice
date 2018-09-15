var express = require('express');

var app = express(); //this will allow us to fire the express function using the variable app

app.set('view engine', 'ejs'); 
app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){ 
res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){
var data = {age: 29, job: 'ninja'};
res.render('viewsprofiles', {person: req.params.name, data: data}); //render basically renders a view to the viewsprofiles.ejs file
}); //pass data to a view by passing object as a 2nd parameter which is number

app.listen(process.env.PORT, process.env.IP, 3000);



