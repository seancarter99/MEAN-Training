// Declaring an array
/**
 * In JS, arrays are not strongly typed, so I can throw anything into an array
 * 
 * Treat JS arrays similar to an ArrayList in Java
 * They auto resize depending on what gets added/removed
 * 
 * ArrayList<Object> myList = new ArrayList<>();
 */

const arr = ['a', 'b', 'c'];

//                   0          1         2         3       4         5
let fruitBasket = ['Mango', 'Pineapple', 'Plum', 'Guava', 'Cherry', 'Mango'];

/**
 * Standard array methods
 * 
 * 
 * Mutation methods:
 * push - Add something to the end
 * pop - Remove something from the end
 * shift - Remove something from the front
 * unshift - Adds something to the front
 */

// Adds Banana to the end of the array
fruitBasket.push('Banana');

console.log(fruitBasket);

const removedFrontElement = fruitBasket.shift(); // This returns the element removed
console.log(removedFrontElement) // Mango
console.log(fruitBasket);

const removedBackElement = fruitBasket.pop();
console.log(removedBackElement) // Banana
console.log(fruitBasket);

fruitBasket.unshift(removedBackElement);
fruitBasket.push(removedFrontElement);

console.log(fruitBasket);

// Arrays are 0 indexed, meaning that the first element exists at index 0

console.log('The second fruit in the basket is: ' + fruitBasket[1]);

// Array.at() is similar to the [] notation, but it allows for negative access like Python does

// console.log('The last element in the basket is ' + fruitBasket[fruitBasket.length - 1]);
console.log('The last element in the basket is ' + fruitBasket.at(-1));
console.log('The third to last element in the basket is ' + fruitBasket.at(-3));


// If accessing a value beyond the indices of an array, it does not throw an error, it just returns undefined

console.log(fruitBasket[1000]);

// Remove from an index
// Splice removes a subsection of an array

// We want to remove Guava

// Find the index of Guava using indexOf
const guavaIndex = fruitBasket.indexOf('Guava');

// This is similar to substring
const removedFruits = fruitBasket.splice(guavaIndex, 4);

console.log(removedFruits);
console.log(fruitBasket);


// Slice creates a copy of the array
// Creates a shallow copy of our array
// AKA different memory address, but same data

// const fruitCopy = fruitBasket; // This has the fruitCopy point to the EXACT fruitBasket as the OG
const fruitCopy = fruitBasket.slice();

// fruitCopy.push('Apple');
// fruitCopy.push('Apple');

fruitCopy.push('Apple');

fruitCopy.push('Apple');

fruitCopy.push('Apple');

fruitCopy.push('Apple');

fruitCopy.push('Apple');
fruitCopy.push('Apple');
fruitCopy.push('Apple');
fruitCopy.push('Apple');


console.log(fruitBasket);
console.log(fruitCopy);

console.log(fruitBasket === fruitCopy);