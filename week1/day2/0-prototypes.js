// Prototypes are responsible for inheritance in JS

/**
 * Two types of prototypes
 * 
 * Function's Prototype: An object containing properties that you want to be inherited (prototype)
 * Object's Prototype: A pointer to the function's prototype that it was created from (__proto__)
 * 
 * LinkedList sortof structure
 */

const obj = {};

// console.log(obj.__proto__);

// Constructor Function
// This was the standard before classes were brought to JavaScript in 2015

function Vehicle(make, model, color) {
    // use the this keyword to bind the properties to the newly created object
    this.make = make;
    this.model = model;
    this.color = color;
}

Vehicle.prototype.drive = function() {
    console.log('Vroom Vroom!');
}

// new keyword tells JS to call Vehicle as a constructor
const myVehicle = new Vehicle('Volkswagen', 'Jetta', 'White');

// Prototypal Inheritance Chain
console.log(myVehicle.__proto__ === Vehicle.prototype); // true
console.log(Vehicle.prototype.__proto__ === Object.prototype); // true
console.log(myVehicle.__proto__.__proto__ === Object.prototype); // true (same as line above)

myVehicle.drive();
myVehicle.drive();
myVehicle.drive();

// Add something to the Object prototype
Object.prototype.doSomething = function() { console.log('Doing something!'); }

''.doSomething();
[].doSomething();
new Object().doSomething();
myVehicle.doSomething(); // uses Object's doSomething method

// Overriding in JavaScript

Vehicle.prototype.doSomething = function() { console.log('Igniting engine') }
myVehicle.doSomething(); // Calls the Vehicle's doSomething method

// Since myVehicle doesn't have a property called doSomething, 
// it tries: myVehicle.__proto__.doSomething() instead
// if that didn't work, it keeps on trying by chaining another __proto__ to it
//     myVehicle.__proto__.__proto__.doSomething()
// If it reaches null, then that is the end of the chain

console.log(Object.prototype.__proto__); // null (end of the __proto__ chain)


// Complex

// I want to create an object compltetly free of the inheritance tree

const obj1 = {}; // Same thing goes here
const obj2 = new Object(); // This has properties already on it such as __proto__
const myObj = Object.create(null); // This has nothing on it
// myObj.toString(); // This function throws an error because it is NOT a part of the inheritance chain

const otherVehicle = Object.create(Vehicle.prototype); // Alternative to creating using new, it just doesn't call constructor
console.log(otherVehicle.__proto__ === Vehicle.prototype);

