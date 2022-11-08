/**
 * Classes were added in 2015 for ES6
 * 
 * The addition of classes to JS did NOT introduce OOP
 * 
 * Classes in JS are simply "syntactic sugar", meaning they are just a nice layer of abstraction over
 *   standard prototypal inheritance
 */

// Syntax for classes is very similar to Java
class Cake {
    // Make cake slices a private variable
    // In 2021, JS added support for private variables in JS
    #slices; // The # indicates that this variable CANNOT be accessed outside the class

    constructor(flavor, layers, icing, slices=8) {
        // Perform initializtion in logic in here
        this.flavor = flavor;
        this.layers = layers;
        this.icing = icing;
        this.slices = slices; // Calls the setter
    }

    eat() { // Technically this isn't added to the prototype, but rather the object
        console.log(`Eating the ${this.flavor} cake!`);
    }

    // Getters and setters for private variables

    // This method is called using someCheesecake.slices
    get slices() {
        // return this.slices; // This is an infinite loop
        return this.#slices;
    }

    // This method is called using someCheescake.slices = ANYTHING
    set slices(slices) {
        // This is code, so I can validation logic here
        // If the provided parameter is not a number, do nothing
        if (typeof slices == 'number') {
            if (slices < 0) {
                throw new RangeError('Slices must not be negative');
            }
            this.#slices = slices;
        } else {
            // Used for when the wrong data type is passed
            throw new TypeError('Slices must be a number');
        }
    }

    // You can also define static methods on a class very easy
    // You could also write Cake.description = function() {} below the class definition
    static description() {
        // You cannot use 'this' in here to refer to the object
        // Static does belong to an object, but rather, the class itself
        console.log('This is a cake.');
    }

    // Static variables work too
    static name = 'Cake';
}

// Works exactly the same as static
// Cake.description = function() {
//     console.log('This is a cake.');
// }

// Constructor Function equivalent
// function Cake(flavor, layers, icing) {
//     this.flavor = flavor;
//     this.layers = layers;
//     this.icing = icing;
// }

// Cake.prototype.eat = function () {
//     console.log(`Eating the ${this.flavor} cake!`);
// }

// Classes force you to use the new keyword
const chocolateCake = new Cake('Chocolate', 3, 'Whipped');
console.log(chocolateCake);

chocolateCake.eat();

// Inheritance with Classes

// It will extend Object if not specified
class Cheesecake extends Cake {

    constructor(flavor, layers, icing) {
        // To call the parent constructor, use super()
        super(flavor, layers, icing);
    }
}

const raspberryCheescake = new Cheesecake('Raspberry', 1, null);
console.log(raspberryCheescake);

raspberryCheescake.eat(); // This was "inherited" from the Cake class

// The prototype chain still exists and is used with classes
console.log(raspberryCheescake.__proto__ === Cheesecake.prototype); // true
console.log(raspberryCheescake.__proto__.__proto__ === Cake.prototype); // true
console.log(raspberryCheescake.__proto__.__proto__.__proto__ === Object.prototype); // true

console.log(raspberryCheescake.slices); // Calls the getter

raspberryCheescake.slices = 2; // Calls the setter

raspberryCheescake.slices = 'Two'; // Calls the setter

console.log(raspberryCheescake.slices); // Calls the getter

// raspberryCheescake.description(); // Does not work
Cake.description(); // Since it's static, it exists on the Cake class itself

console.log(Cake.name);

new Cake('', null, null, -1);