var events = require('events');
var util = require('util');

var Person = function(name){ //person is an object constructor
    this.name = name;
};

util.inherits(Person, events.EventEmitter) //this allows us to make the Person variable inherit the eventemitter so that we can attach custom events to certain people.

var james = new Person('james');
var mary = new Person('mary');
var rose = new Person('rose');

var people = [james, mary, rose];

people.forEach(function(person){
    person.on('speak', function(mssg){
       console.log(person.name + ' said: ' + mssg); 
    });
});

james.emit('speak', 'hey dudes');