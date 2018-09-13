var fs = require('fs');  //common practice is to set the variable name to the module name

fs.readFile('readme.txt', 'utf8', function(err, data){
   fs.writeFile('writeMe.txt', data);
}); //since we removed the Sync it's now asynchronous and we need a call back function to fire when the process is complete
//it's also nonblocking and won't stop the rest of the code beneath, it just continues and will fire the function when it's ready

