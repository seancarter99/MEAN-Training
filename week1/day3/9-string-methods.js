/**
 * ES6 
 * 
 * 1. template literals were an addition in modern JS, `${javascript here}`
 * String methods that we will discuss today
 * 2. repeat : takes number as argument and returns a string containing that number of copies
 * 3. include : takes a string/character as an argument and returns a boolean for if the string contains it (case sensitive)
 * 4. startsWith : takes a string/character as an argument, returns a boolean if the string begins with the provided argument 
 * 5. endsWith : similar to startsWith but checking end
 * 
 * *** include, startsWith, endsWith have optional second parameter. this is an index. 
 * i.e. check to see if string includes 'xyz' starting from this index.
 * Otherwise, defaults to checking entire string.
 * 
 */

const str = "Wax on, Wax off"

console.log(str.includes('w')); // lowercase -> false
console.log(str.includes('W')); // true
console.log(str.includes('p')); // false
console.log(str.includes('on')); // true
console.log(str.includes('on', 8)); // false

console.log('-----------------------------------------')

console.log(str.startsWith('W')); // true
console.log(str.startsWith('w')); // false
console.log(str.startsWith('x')); // false
console.log(str.startsWith('Wax')); // true
console.log(str.startsWith('Wax', 2)); // false, searching " Wax off"
console.log(str.startsWith('Wax', 8)); // true, searching "Wax off"

console.log('-----------------------------------------')

console.log(str.endsWith('W')); // false
console.log(str.endsWith('f')); // true
console.log(str.endsWith('!')); // false
console.log(str.endsWith('off')); // true
console.log(str.endsWith('off', 5)); // false, cuts string at index and searches "Wax o"

console.log('-----------------------------------------')

console.log(str.repeat(10));
const newStr = str.repeat(10);
console.log(newStr.length)