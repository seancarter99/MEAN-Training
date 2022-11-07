// Booleans are simply true/false values

// if block
// Takes a boolean equation (something evaluates to true or false)
// If that equation is true, run the if code
// If it was false, run the else code (or move to next else if block)

/**
 * Logical Operators
 * 
 * == (Logical Equals)
 * != (Logical Not Equals. Inequality operator)
 * <
 * >
 * <=
 * >=
 * || (Logical OR)
 * && (Logical AND)
 * ! (Not)
 */

if (42 != 42) {
    console.log('These two are equal')
} else {
    console.log('These two are NOT equal')
}

// == (Equality operator)
// ONLY compares the value (does not take type into account)

console.log('a' == 'a'); // true
console.log(20 == 20); // true
// if ('20' == 20) -> if ('20' == '20') -> true
console.log('20' == 20); // true

// === (Strict equality operator)
// First compares the type, and if they're equal, then compares the values

// if (typeof 2 == typeof '2') -> if ('number' == 'string') -> false
console.log(2 === '2'); // false

// console.log(function someFn() {
//     if (true) {
//         console.log('True!');
//     }
// })