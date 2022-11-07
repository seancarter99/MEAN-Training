// JavaScript is DYNAMICALLY TYPED
// A language like Java is STATICALLY TYPED (Strongly typed)
// If we want the power of statically typed variables in JS, use TypeScript

// Dynamically typed languages DO have types (they just occur at runtime)

/**
 * Primitives:
 * - Number (works for integers and floats)
 * - String (Includes both individual characters AND full sequence words)
 * - Boolean (true/false)
 * - BigInt (For the especially large integers)
 * - Undefined (The abscence of a value. Usually implicit by JavaScript)
 * - Null (Usually explicit by the programmer)
 * - Symbol (This is used by JavaScript for recognizing certain things. ex. Is something a function, can i iterate over it?)
 * 
 * Objects (Non-Primitives):
 * - Objects
 * - Arrays
 * - Functions
 * - Anything that isn't a primitive
 */

// typeof is an operator that allows us to check a variables type at runtime
// If I want to perform some action only if the variable is a certain type, use typeof (or TypeScript)

console.log(typeof 42); // 'number'
console.log(typeof 'Hello World'); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof 10n); // 'bigint'
console.log(typeof null); // 'object'

const firstName = 20;
if (typeof firstName == 'string') {
    console.log('First Name IS A string');
} else {
    console.log('First Name is NOT a string');
}

