// Simple (MUST KNOW)

// Declaring an object
// In OOP, an object is the representation of a real life object

// In JS, {} is object creation syntax
// Also in JS, objects are key-value objects (similar to dictionaries in Python)
const sethsVehicle = {
    owner: 'Seth',
    color: 'Black',
    make: 'Chevrolet',
    model: 'Chevelle',
    year: 1972
}

console.log(typeof sethsVehicle); // object

// Accessing properties/fields on an object
console.log('The color of the vehicle is', sethsVehicle.color);

// Accessing a property that's not on the object
console.log('The color of the vehicle is', sethsVehicle.colour); // colour is undefined

console.log(`${sethsVehicle.owner} drives a ${sethsVehicle.color} ${sethsVehicle.make} ${sethsVehicle.model}`);

// Nested objects

const student = {
    name: 'Jane',
    lastName: 'Austen',
    school: {
        name: 'Lincoln High School',
        numStudents: 1000,
        location: 'Springfield, Illinois'
    }
}

// student.schol -> undefined
// undefined.name -> Doesn't exist, throws a TypeError
// Similar to a null pointer exception in most languages

// Optional chaining is a nicer way to avoid null pointer
// student.scho?.name 
// ?. Performs a check if it is not null/undefined, if it isn't performs the standard procedure
// If it was null or undefined, returns undefined

console.log(`${student.name} attends ${student.schol?.name} in ${student.school.location}`);

console.log(null?.name); // Return undefined even though this a blatant null pointer exception

const obj = {};

// Even though obj is const, I can mutate it directly
// Const only prevents reassignment

obj.prop = 'Prop'; // "Set" the value of property on an object
console.log(obj);

// obj = {}; // Throws an error


