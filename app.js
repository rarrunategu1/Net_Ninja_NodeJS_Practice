var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8'); // This reads the file
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
myReadStream.on('data', function(chunk){ //this function fires everytime we receive a chunk
    console.log('new chunk received: ');
    myWriteStream.write(chunk); // which will write the chunk to the writeMe.txt file
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

