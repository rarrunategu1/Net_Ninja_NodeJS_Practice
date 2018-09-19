var express = require('express');
var bodyParser = require('body-parser'); //this was given by the body-parser information on the npm website

var app = express(); 

var urlencodedParser = bodyParser.urlencoded({ extended: false }); //this is the function we want to invoke in our middleware to parse our POST data
app.set('view engine', 'ejs'); 
app.use('/assets', express.static('assets')); //express.static is the middleware that express comes with. 'assets' is the folder name
  

app.get('/', function(req, res){
res.render('index');
});
app.get('/contact', function(req, res){ 
res.render('contact', {qs: req.query});  
    
}); //you can now return the query in the view by rendering it in the view below
app.post('/contact', urlencodedParser, function(req, res){ 
console.log(req.body);
res.render('contact-success', {data: req.body}); //this will now give us access to the data in the form in the contact view 
    
});
app.get('/profile/:name', function(req, res){
var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
res.render('viewsprofiles', {person: req.params.name, data: data}); //here we've rendered the view to the query
}); 
app.listen(process.env.PORT, process.env.IP);



