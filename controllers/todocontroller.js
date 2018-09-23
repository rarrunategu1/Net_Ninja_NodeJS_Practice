//This file will control behavior of todolist by manipulating data and handle route. etc
var bodyParser = require('body-parser');

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}]; //this is some dummy data for the ul on the ejs file
var urlencodedParser = bodyParser.urlencoded({extended: false}); //this is the middleware we want to run in the POST request below

module.exports = function(app){ //app is the variable to run the express package in app.js

//make handlers for different requests we're going to get

app.get('/todo', function(req, res){ //get request for the url itself
  res.render('todo', {todos: data}); //to render view of todofile(ejs) with the dummy data from variable data
});

app.post('/todo', urlencodedParser, function(req, res){ //get request for the url itself
  data.push(req.body);
  res.json(data);
});

//for user to delete 
app.delete('/todo/:item', function(req, res){
 data = data.filter(function(todo){
   return todo.item.replace(/ /g, '-') !== req.params.item; //this statement returns either true or false; if it's true it remains in the array; if false then item comes out of the array
 });
 res.json(data);
});
};