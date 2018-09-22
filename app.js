var express = require('express');
var todoController = require('./controllers/todocontroller'); //to include todocontroller.js module
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public')); //this will be used on every route we put into the url bar


//fire controllers
todoController(app); //remember app is used in the todoController.js file


//listen to port
app.listen(process.env.PORT, process.env.IP);
console.log('You are listening to port 3000');


