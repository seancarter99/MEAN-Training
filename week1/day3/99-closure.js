/**
 * A closure is a function that contains an encapsulated reference to it's surrounding (lexical) environment
 * Aka an inner function that has access to values defined in the outer function/arguments (variables from the exterior scope)
 * 
 * In javascript I can have functions nested inside other functions
 * I can return a function from a function, or pass a function as an argument to a function
 * 
 */

function myFunction() {
    const x = 10;
}

myFunction();
// console.log(x); // x is undefined; it is scoped within the function

function myClosure(name, age) {
    // const age = 30;
    return function inner() { 
        console.log(`Hello I'm ${name} and I'm ${age} years old`)
    }
    // could also define inner function here and return it by name - see closure-encapulation as reference
}

// cannot access name and age here
// console.log(myClosure(age)) // cant access

// console.log(myClosure.inner()) // does not recognize/know about the function if not returned above

// these functions are returned from myClosure
const haleyIntro = myClosure('haley', 30);
const samIntro = myClosure('sam', 40);
const kevinIntro = myClosure('kevin', 50);

// each one maintains its own respective closures; i.e. the variables persist for each 
haleyIntro();
samIntro();
kevinIntro();

/**
 * We have two functions here. 
 * The outer function returns a brand new function. 
 * Variables persist and we can access them through the returned function, even though we have exited their scope. 
 * 
 * This is a HOF - returning a function
 */