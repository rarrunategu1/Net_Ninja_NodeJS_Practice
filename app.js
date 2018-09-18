var express = require('express');

var app = express(); 
app.set('view engine', 'ejs'); 
app.use('/assets', express.static('assets')); //express.static is the middleware that express comes with. 'assets' is the folder name
  

app.get('/', function(req, res){
res.render('index');
});
app.get('/contact', function(req, res){ 
res.render('contact', {qs: req.query});  
    
}); //you can now return the query in the view by rendering it in the view below

app.get('/profile/:name', function(req, res){
var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
res.render('viewsprofiles', {person: req.params.name, data: data}); //here we've rendered the view to the query
}); 
app.listen(process.env.PORT, process.env.IP);



