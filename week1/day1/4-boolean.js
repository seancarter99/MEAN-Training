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
console.log('20' == 20); // true. Numeric 20 is "coerced" into being a string

// === (Strict equality operator)
// First compares the type, and if they're equal, then compares the values

// if (typeof 2 == typeof '2') -> if ('number' == 'string') -> false
console.log(2 === '2'); // false

// console.log(function someFn() {
//     if (true) {
//         console.log('True!');
//     }
// })

/**
 * 
 * Falsy:
 * - Values that if they were coerced to a boolean, they'd be false
 * 
 * - false
 * - 0
 * - -0
 * - 0n
 * - ""
 * - null
 * - undefined
 * - NaN
 * 
 *  Truthy:
 * - Values that if they were coerced to a boolean, they'd be true
 * - Anything that is not on the falsy list, is truthy
 * 
 * - true
 * - "false"
 * - " "
 * - -1
 * - 42
 * - {}
 * - []
 */

let username = "Bob";

// Disallows, null, undefined, and empty string
if (username) {
    console.log('Your chosen username is: ' + username)
} else {
    console.log('This is not a valid username');
}

// Never use == (equality operator), always use the === (strict equality operator)
// One case where you should use ==

// null and undefined

console.log(null == undefined); // true
console.log(null === undefined); // false

// If I want to prevent ONLY null or undefined values

let password = false;

// This if prevents both null AND undefined values. Allows everything else, including empty string ""
if (password == null) {
    console.log('Invalid password')
} else {
    console.log('Your selected password is: ' + password);
}

// Explicitly casting a value to a boolean

// 1. Use the Boolean constructor provided by JS to cast to a boolean
// typeof is not necessary
console.log(typeof Boolean("false")); // Boolean() takes a value and returns it as a boolean. Casts to a boolean

// 2. Using the ! operator twice
console.log(typeof !!42); // !!42 -> !false -> true

// Logical Equations


/**
 * true
 * undefined
 * 42 **The Answer
 */

// || 
// If the left hand side is truthy, return the left hand side. If it is falsy, return the righthand side

// true || (false && true && true && true)
// This shortcircuits and just returns true
console.log(0 || (false && (true && (true && true) ) ));

console.log(0 || 42); // 42

// &&
// If the left hand side is truthy, return the right hand side. If it is falsy, return the lefthand side

// true
// Goodbye Sunshine
// Hello Sunshine Goodbye Sunshine

// true && false -> false
// 2 && 'Hello!' -> 'Hello!

console.log('Hello Sunshine' && 'Goodbye Sunshine') // Goodbye Sunshine

console.log('Hello!' && null); // null

console.log('Hello Sunshine' && 0 && 'Goodbye Sunshine'); // 0

// Ternary Operator

// ? :
// If the boolean expression evaluates to true, return what's after the ?, otherwise return after the :
// (Boolean Expression) ? val1 : val2

function determinePassOrFail(grade) {
    // if (grade >= 70) {
    //     return 'P';
    // } else {
    //     return 'F';
    // }
    // return grade >= 70; // This only true or false, not a character like I want
    return grade >= 70 ? 'P' : 'F';
}

console.log(determinePassOrFail(100)); // P
console.log(determinePassOrFail(70)); // P
console.log(determinePassOrFail(-29)); // F
console.log(determinePassOrFail()); //  F