// function b() {
// 	console.log(myVar)
// }

// function a() {
// 	var myVar = 2
	
// 	b()
// }

// var myVar = 1 

// a()

// console.log(1 + '3')

// console.log(1 < 2 < 1)

// console.log(Number('three'))

// console.log('2' == 2)

// console.log('2' === 2)

// var a = 0

// if (a) {
// 	console.log('something is there')
// }


// var a = 1

// if (a) {
// 	console.log('something is there')
// }

// var a = 0

// if (a || a === 0) {
// 	console.log('something is there')
// }

// Default Values 

// function greet(name) {
// 	name = name || '<Your name here>'
// 	console.log('Hello ' + name)
// }

 // es6 Default 
// function greet(name = '<Your name here>') {
// 	console.log('Hello ' + name)
// }

// greet()

// Objects and functions

// var person = new Object()

// person["firstName"] = "Tony"
// person["lastName"] = "Alicia"

// var firstNameProperty = "firstName"

// console.log(person.firstName)
// console.log(person[firstNameProperty])

// Dot operator 

// person.city = new Object()
// // person.city = "Berkeley"
// person.city.zip = "zip"
// person.street = "Carleton"
// console.log(person.city.zip)

// Object Literal

// person = { 
// 		firstName: 'Tony', 
// 		lastname: 'Roma',
// 		address: {
// 			street: 'Carleton',
// 			zip: '94702'
// 		} 
// 	}

// console.log(person)

// Functions = objects 

// function greet() {
// 	console.log('hi')
// }

// greet.language = 'english'

// console.log(greet.language)

// Anonymous Functions

// greet()

// function greet() {
// 	console.log('Hi')
// }

// anonymousGreet()

// // v doesn not hoist 
// var anonymousGreet = function() {
// 	console.log('Hi')
// }

// function log(a) {
// 	console.log(a)
// }

// var b = 3
// log(b)

// function log(a) {
// 	a()
// }

// log(function(){
// 	console.log('Hi')
// })

// BY VALVUE (PRIMITIVES)
// var a = 3
// var b 

// b = a 
// a = 2

// console.log(a)
// console.log(b)

// BY REFERENCE (all object including fucntions )

// var c = {
// 	greeting: "What up"
// }
// var d

// d = c 
// c.greeting = "Hey"

// console.log(c)
// console.log(d)


// BY REFERENCE (EVEN AS PARAMETERS)

// function changeGreeting(obj) {
// 	obj.greeting =  "Hola"
// }

// changeGreeting(d)
// console.log(c)
// console.log(d)



// c = { greeting: "What" }
// console.log(c)
// console.log(d)

// GLOBAL LEVEL SCOPE 

// function a() {
// 	console.log(this)
// }

// a()

// var c = {
// 	name: 'Cee',
// 	log: function() {
// 		console.log(this)
// 	}
// }

// c.log()

// ARGUEMENTS

// function greet(first, middle, last = 'Flanders'){
// 	console.log(first)
// 	console.log(middle)
// 	console.log(last)
// }

// greet()
// greet('Homer')
// greet('Homer', 'J')
// greet('Homer', 'J', 'Simpson')

// AUTOMATIC SEMICOLONS

// function soccer(){
// 	return
// 	{
// 		ball: 'large'
// 	}
// }

// SO ALWAYS PUT ON SAME LINE

// function soccer(){
// 	return {
// 		ball: 'large'
// 	}
// }

// Immediately Invoked Function Expressions (IIFE)

// FUNCTION STATEMENT

// function greet(name) {
// 	console.log('Hello ' + name);
// };
// greet()

// // FUNCTION Expression

// var greetFunc = function(name){
// 	console.log('Hello ' + name);
// };

// greetFunc()

// Immediately Invoked Function Expressions (IIFE)

// var greeting = function(name){
// 	return 'Hello ' + name;
// }('Homer');

// console.log(greeting);


// (function(name){

// 	return 'Hello ' + name;

// }('Homer'));

// GLOBAL 

// global.name = 'World'


// CLOSURES

// function greet(whattosay) {

// 	return function(name) {
// 		console.log(whattosay + ' ' + name);
// 	}

// }

// greet('Hi')('Tony');

// var sayHi = greet('Hi');
// sayHi('Tony');

// function buildFunctions() {
// 	var arr = [];

// 	for (var i = 0; i < 3; i++) {

// 		arr.push(
// 			function(){
// 				console.log(i);
// 			}
// 		)

// 	}
// 	return arr;
// }

// var fs = buildFunctions();

// fs[0]();
// fs[1]();
// fs[2]();


// FUNCTION FACTORY

// function makeGreeting(language) {

// 	return function(firstName, lastName) {
// 		if (language === 'en') {
// 			console.log('Hello ' + firstName + ' ' + lastname)
// 		} 

// 		if (language === 'es') {
// 			console.log('Hola ' + firstName + ' ' + lastname)
// 		}
// 	}

// }

// var greetEnglish = makeGreeting('en')
// var greetSpanish = makeGreeting('es')

// greetEnglish('John', 'Doe')
// greetSpanish('John', 'Doe')


// // CLOSURES + FUNCTION EXPRESSION 

// function sayHiLater(){
// 	var greeting = 'Hi'

// 	setTimeOut(function(){
// 		console.log(greeting);
// 	}, 3000)
// };

// sayHiLater();

// CALLBACK FUNCTION - sending a function another function to run

// FUNCTION EXECUTION CONTEXT - CALL(), APPLY(), BIND()

var person = {
	firstName: 'John',
	lastName: 'Doe',
	getFullName: function() {
		var fullname = this.firstName + ' ' + this.lastName;
		return fullname;
	}
}

var logName = function(lang1, lang2) {
	console.log('Logged: ' + this.getFullName());
}

var logPersonName = logName.bind(person)

logPersonName('en');

logName.call(person, 'en', 'es')  same as logName() but allows to determine the 'this' value and pass along parameters 

logName.apply(person, ['en', 'es']) - expects params as an array 

OR

(function(lang1, lang2) {
	console.log('Logged: ' + this.getFullName());
}).apply(person, ['es', 'en']); 

var person2 = {
	firstName: 'Jane',
	lastName: 'Doe'
}
person.getFullName.apply(person2)

function currying 

function multiply(a, b) {
	return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);

FUNCTIONAL PROGRAMMING WITH JS

function mapForEach(arr, fn) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
	    newArr.push(
	    	fn(arr[i])
	  )
	}
	return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item){
	return item * 2;
})

var checkPastLimit = function(limiter, item) {
	return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4)



______

UNDERSCORE library - lots of precreated methods to use, ex.  var x = _.filter([1, 2, 3, 4, 5, 6], function(item){ return item > 3 });













