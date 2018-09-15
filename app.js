var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){//this creates a server and whenever we send a request to the server, then the function will fire
    console.log('request was made: ' + req.url); //once you go to the ip address and listen in to the port if you write additional /information on the browser it will console.log it.  This may be good for navigating a website
   if(req.url === '/home' || req.url === '/'){
     res.writeHead(200, {'Content-type': 'text/html'});
     fs.createReadStream(__dirname + '/index.html').pipe(res);
   } else if (req.url === '/contact/us'){
      res.writeHead(200, {'Content-type': 'text/html'});
     fs.createReadStream(__dirname + '/contact.html').pipe(res);
   } else if (req.url === '/api/ninjas'){
     var ninjas = [{name: 'ryu', age: 20}, {name: 'yoshi', age: 32}];
     res.writeHead(200, {'Content-type': 'application/json'});
     res.end(JSON.stringify(ninjas));
   } else {
      res.writeHead(404, {'Content-type': 'text/html'});
     fs.createReadStream(__dirname + '/404.html').pipe(res);
   }
   });

server.listen(process.env.PORT, process.env.IP, 3000); //is the port and IP adddress
console.log('yo dawgs, now listening to port 3000');


