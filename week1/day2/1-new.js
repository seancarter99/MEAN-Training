/**
 * new keyword
 * 
 * When you use the new keyword, it does 4 things:
 * 
 * 1. Creates a brand new, JavaScript object
 * 2. Adds the __proto__ property to the created object, and points it to the function/class's prototype
 * 3. Binds all references of 'this' to the newly created object
 * 4. Returns 'this' AKA the newly created object
 */

// name, age, weight
function Animal(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    // this.speak = function() { // This works, but creates it on the object
    //     console.log(`My name is ${this.name}`);
    // }
}
// Speak function that says the animal's name

Animal.speak = function() { // This function is essentially a static function
    console.log(`My name is ${this.name}`);
}

Animal.prototype.speak = function() { // This function is essentially a static function
    console.log(`My name is ${this.name}`);
}

function speak(animal) {
    console.log(`My name is ${animal.name}`);
}

const simba = new Animal('Simba', 7, 100);
speak(simba);

simba.speak();
// Animal.speak();
