var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
    
};

module.exports = counter; //this makes the counter function available outside of this module so I can require it in my app.js

