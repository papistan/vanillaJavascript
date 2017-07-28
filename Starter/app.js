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

function greet(whattosay) {

	return function(name) {
		console.log(whattosay + ' ' + name);
	}

}

greet('Hi')('Tony');

var sayHi = greet('Hi');
sayHi('Tony');















