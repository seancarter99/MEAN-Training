/**
 * Two types of destructuring:
 * 1. Objects
 * 2. Arrays
 * 
 * use cases: 
 * - importing from package like react - dont want to import entire package I only want parts -> destructure 
 * - when I retrieve data from a database - an OBJECT - I can destructure what I want from it
 */

const dog = {
    name: 'Dottie', 
    age: 3, 
    breed: {
        name: 'Pembroke Welsh Corgi',
        isPure: true
    },
    weight: 25,
    height: 11,
    color: 'Black Headed Tricolor',
    legs: 4,
    hasTail: false, 
    hasOwner: true

}

const getDottie = function() {
    return dog;
}

// I can extract certain fields from the object as variables
// I can destructure just the things I want
const { name: firstName, breed: {name: breed, isPure}, color, ...rest } = getDottie(); // this is called object destructuring

// name, breed and color are now variables holding the values from the dog
// don't have to use the same name as the object key; can assign what I want to refer to it as (see name:firstName) like an alias

console.log(firstName);
console.log(breed);
console.log(rest);

// console.log(`Hello my name is ${dog.name}`)
// console.log(`Hello my name is ${firstName}`);

// destructuring in a function's parameters

// function introduceDog(obj){
//     console.log(`Hello my name is ${obj.name}, I am ${obj.age} years old, ${obj.height} inches tall, and ${obj.weight} pounds.`)
// } // this is a lot more key strokes. destructuring in the parameter list will help avoid repeting 'obj.' ....

// My function is expecting and I am passing an object into it. In the parameter list I am destructing what I want from the object
function introduceDog( { name, age, height, weight } ){
    console.log(`Hello my name is ${name}, I am ${age} years old, ${height} inches tall, and ${weight} pounds.`)
}

introduceDog(dog);


// Array destructuring

const fruits = ['Apple', 'Mango', 'Peach', 'Nectarine', 'Grapes', 'Banana', 'Pineapple']

// arrays dont have keys like objects. I can refer to the destructured properties as whatever I choose
const [x, secondFruit, ...restOfFruits] = fruits;

// console.log(x);
// console.log(secondFruit);
// console.log(restOfFruits);

const [,fruit2,,,fruit5] = fruits; // skip over some elements using empty/commas

// console.log(fruit2);
// console.log(fruit5);