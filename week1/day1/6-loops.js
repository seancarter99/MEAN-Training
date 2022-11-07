/**
 * Loops allow us to run repeated logic while some condition is met
 * 
 * Types of loops:
 * 
 * while
 * for
 * do while
 * for..in
 * for..of
 */

// while some condition is met, run

// This is an infinte loop AKA a loop that will never stop running
// CTL + C or CMD + C is the signal interrupt to kill a program
// while(true) {
//     console.log('Hello World');
// }

let money = 1000;
while (money > 0) {
    console.log('Current funds: ' + money);
    console.log('Spending 100 bucks');
    money -= 100; // money = money - 100
}

// For loops are great at running tasks FOR a given number repetitions

// (Declare a counter variable; Loop Condition; "Incrementor")
for (let i = 0; i < 100; i++) {
    console.log(`Loop iteration: ${i}`);
}

// 4 squared = 16
console.log(4 ** 2); // Exponents

// Do While loops are the exact same as regular while loops, but they always run AT LEAST ONCE

do {
    console.log('I only run once');
} while(0);

// for..in
// For in loops iterate over "enumerable" objects
// For in are most commonly used for iterating over properties of objects

const obj = {
    color: 'Red',
    name: 'Gary',
    age: 51
}

for (let prop in obj) {
    console.log(`Key name: ${prop}`);
    // console.log(`Value: ${obj.prop}`); Doesn't as intended, because it calls obj' "prop" property
    console.log(`Value: ${obj[prop]}`);
    console.log();
}

// Strings are enumerable
// The enumerables are the indices
// A number corresponds to a value

for (let index in 'Hello World') {
    console.log(index);
}

// for..of
// For of loops iterate over "iterable" objects
// "Iterables" are sequential

// Strings and arrays are "iterable"
// Objects are NOT iterable

// JavaScript looks for a property called Symbol.iterator on the object to deduce whether it's iterable or not
// If it is iterable, it calls a function on the object called next()

for (let char of 'Hello World') {
    console.log(char);
}

// for (let num of 100) {
//     console.log(num);
// }

