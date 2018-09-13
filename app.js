var fs = require('fs');  


fs.unlink('./stuff/writeMe.txt', function(){ //removes the file first because you can't remove the directly unless it's empty
fs.rmdir('stuff'); //then after ti removes it it will fire a function to remove the directory as well
});