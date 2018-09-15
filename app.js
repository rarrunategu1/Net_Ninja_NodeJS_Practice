var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){//this creates a server and whenever we send a request to the server, then the function will fire
    console.log('request was made: ' + req.url); //once you go to the ip address and listen in to the port if you write additional /information on the browser it will console.log it.  This may be good for navigating a website
    res.writeHead(200, {'Content-Type': 'application/json'}); //use html and it will render it in the browser properly
    var myObj = {
      name: 'Ryu',
      job: 'Ninja',
      age: 29
    };
    res.end(JSON.stringify(myObj)); //res.end expects a string or a buffer so if it's an object we need to create it into a json format string
});

server.listen(8080, '0.0.0.0'); //is the port and IP adddress
console.log('yo dawgs, now listening to port 3000');


