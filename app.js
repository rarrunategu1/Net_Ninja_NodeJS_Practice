function callFunction(fun){ //this is a function that takes a function as a parameter
    fun(); //this calls that function
}

//function expression
var sayBye = function(){
    console.log('bye');
};
callFunction(sayBye); //when you call this it uses the sayBye function in the callFunction so when you run it, it returns bye