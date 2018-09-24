//This file will control behavior of todolist by manipulating data and handle route. etc
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://testing123:testing123@ds113703.mlab.com:13703/todo');

//create a schema - it's like a blueprint for our data; it's telling MongoDB what to expect from our tododata
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema); // the Todoparameter is a collection that will be stored in mongodb as a collection

  
  //var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}]; //this is some dummy data for the ul on the ejs file..this is commented out so that we can work on a collection stored in a database instead.
var urlencodedParser = bodyParser.urlencoded({extended: false}); //this is the middleware we want to run in the POST request below

module.exports = function(app){ //app is the variable to run the express package in app.js

//make handlers for different requests we're going to get

app.get('/todo', function(req, res){ //get request for the url itself
  //get data fro mongodb and pass it to the view
  Todo.find({}, function(err, data){
   if (err) throw err; 
   //{} will find all items in the collection in the database
  res.render('todo', {todos: data}); //to render view of todofile(ejs) with the dummy data from variable data
});
});

app.post('/todo', urlencodedParser, function(req, res){ //get request for the url itself
  //get data from the view and add it to mongodb
  var newTodo = Todo(req.body).save(function(err, data){
    if (err) throw err;
    res.json(data);
  });
});

//for user to delete 
app.delete('/todo/:item', function(req, res){
  //delete requested item from mongodb
  Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
    if (err) throw err;
    res.json(data);
  });
});
};