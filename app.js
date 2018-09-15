var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8'); //remember that utf8 translates it so its readaable by you, otherwise you'll just get the buffer which is numbers and letters that make no sense
//createReadStream inherits from the eventEmeitter and there's an event on createReadStream called data that will allow us to listen to any kind of data that is received

myReadStream.on('data', function(chunk){
    console.log('new chunk received: ');
    console.log(chunk);
});
//the benefit is that we can send the user information one bit at a time instead of waiting for everything to go through.












/*var server = http.createServer(function(req, res){//this creates a server and whenever we send a request to the server, then the function will fire
    console.log('request was made: ' + req.url); //once you go to the ip address and listen in to the port if you write additional /information on the browser it will console.log it.  This may be good for navigating a website
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1'); //is the port and IP adddress
console.log('yo dawgs, now listening to port 3000');
*/

