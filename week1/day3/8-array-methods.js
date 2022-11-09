// There are 4 main higher order functions on the array class. 

/**
 * To note: 
 * - None of them modify the underlying/original array
 * - All loop over the array
 * - All take a callback function to apply to each element in the array
 * 
 * forEach 
 *   - Performs callback function on each element in the array
 *   - Does not return anything 
 *   - Takes three arguments (element, index, array)
 * map
 *   - Returns a modifed copy of the array based off what is returned
 *   - Takes three arguments (element, index, array)
 *   - Similar to forEach but what is returned gets added to a new array. Returns new array of the same length as the original.
 * filter
 *   - Performs some logic on each element in the array.
 *   - If value returned is true, it is added to the new array
 *   - Returns a modified copy of the array without the filtered elements (i.e. shorter array, just elements that met the condition)
 * reduce
 *   - Takes an array and "reduces" it down to a singular value. A culmination
 *   - Think of it as a snowball rolling down a hill
 * 
 */

// FOR EACH executes once for each element in the array, like a loop. DOES NOT return anything. 

const planets = ['Mercury', 'Earth', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto']

planets.forEach(function(planet){
    planet = 'Apple'; // modifies what is going to print from our forEach loop, but does not change our original array
    console.log(planet.toUpperCase()) 
})

// console.log(planets); // remains untouched after executing the forEach loop

// can take 3 parameters, the others are optional. knows of index, thats 2nd param. also can pass array as 3rd param
planets.forEach(function(planet, index){
    console.log(`Planet at ${index} is ${planet}`)
})

const printInfo = (planet) => {
    console.log('Hello I\'m ' + planet)
}

planets.forEach(planet => printInfo(planet)); // printInfo gets executed once for each element in our planet array

//-----------------------------------------------------------------------------------------

// MAP 
/**
 * Map is another array HOF
 * It will return a NEW array that is the same length of the original array
 * It will execute the callback function once for each element of the array (similar to forEach)
 */

const strings = ['1', '5', '7,', '9', '2', '3', '4', '5', '6', '11']

// conver to nums, i.e. [1,2,3]

const nums = strings.map((element) => parseInt(element)); // returns a new array equivilent to performing callback on each element on the array

// console.log(strings);

// console.log(nums);

const tripled = nums.map((num) => num*3);

// console.log(tripled);

const oddOrEven = tripled.map((num) => {
    if (num % 2 === 0) { // we are making a new array that prints 'even' or 'odd' for each element
        return 'even'
    } else {
        return 'odd'
    }
});

// console.log(oddOrEven);

//-----------------------------------------------------------------------------------------

// FILTER
/**
 * Filter is another HOF of array. It loops over the array and checks for a condition.
 * It returns a new array. New array hold the elements that met the condition.
 * Oftentimes, this array is shorter because we are filtering OUT elements
 */

console.log(tripled);

// filtering to an array of the even elements
const even = tripled.filter((num) => { 
    if (num % 2 === 0) {
        return true
    } 
    // else {
    //     return false
    // }
})

console.log(even);

// we want fruit for lunch; but forgot our credit card. what can we buy with our pocket change?
const fruits = [
    {name: 'pear', cost: 1.00},
    {name: 'apple', cost: 0.50}, 
    {name: 'mango', cost: 3.00},
    {name: 'peach', cost: 2.50},
    {name: 'cherries', cost: 5.00},
    {name: 'cotton candy grapes', cost: 4.00}
]

const money = 10.00;
const moreMoney = 3.25;

// return an array of the fruits that I can buy with my $
const pricedRight = fruits.filter((fruit) => {
    return fruit.cost <= moreMoney
})
console.log(pricedRight)

//-----------------------------------------------------------------------------------------

// REDUCE 
/**
 * Returns a single value from the array
 * Takes a callback and wrap up or accumulate all the values into one final value
 */

//  GOAL : create a function that sums our spending over the month
//  function addition(x,y){
//     return x+y;
// }

const expenditures = [ 1, 5, 22, 0.50, 345, 66, 4.50, 6.01 ]

// accumulator has default value within parameters
// reduce takes optional second parameter: starting value
const totalSpending = expenditures.reduce(function(accumulator=0, currentAmount){
    console.log(`current accumulator is ${accumulator} and current amount is ${currentAmount}`)
    return accumulator + currentAmount; // add the amount to the total and return the total. this total is then used for next element
}, 0)

console.log(totalSpending);

// lets find the largest purchase we made
const biggestPurchase = expenditures.reduce(function(max, currentAmount){
    if (currentAmount > max) { // if current element is more than our previous max, 
        max = currentAmount; // set max to be our current element
        console.log(`Max is now ${max}`)
    }
    return max;
}, 0)

console.log(biggestPurchase); 

//1. filter to names > 5 characters 
//2. reduce to longest name
const names = [ 'haley', 'tobias', 'dottie', 'maisy', 'pensky', 'alexandra', 'charles', 'qqqqqqqqq']

// create an array of 'long names' ie more than 5 characters
// using ternary operator here so: conditon ? (if true do this) : (if false do this)
const namesMoreThanFiveChar = names.filter((name) => name.length > 5 ? true : false );

// same as doing this : 
// if (name.length > 5) {
//     return true
// } else {
//     return false
// }

console.log(namesMoreThanFiveChar)

// let's find the longest name. first param is overridden whenever current element is longer than it
const longestName = names.reduce((longest, currentString) => {
    console.log(longest);

    if (currentString.length >= longest.length) { 
        // > will only replace if element is LONGER than previous longest. >= will replace if same length as previous longest, too
        longest = currentString;
        console.log(`Longest name is now ${longest}`)
    }

    return longest;
})

console.log(longestName)

// Recommend reviewing docs for reduce. Often times you'll see the short hand (a,b) => a+b. 

// function add(...array) {
//     const sum = array.reduce(function(a,b){
//         console.log(`a is currently : ${a} and b is currently ${b}`)
//         return a + b
//     })
//     return sum
// }

function add(...array) {
    const sum = array.reduce((a,b) => a+b, 100); // optional second parameter for initial accumulator; set to 100 here
    return sum
}

console.log(add(3,5, 5, 7, 8, 11))


// chain different array HOFs together
// NOTE: 
// - cannot chain onto (or after) forEach
// - you will not generally chain onto reduce either (because its narrowing down to that single return value)

const numbers = [5,6,7,1,33,22,55,34,752,1,23]

// 1. filter down numbers to elements that are < 30
// 2. multiply each element by 2 (so double it)
// 3. reduce down to the sum of the elements

const sumofDoubledandFIltered = numbers.filter((num) => num<30).map((num) => num*2).reduce((currentTotal, value) => currentTotal+value); 

console.log(sumofDoubledandFIltered)

// instead of reducing, use forEach to log each value instead
numbers.filter((num) => num<30).map((num) => num*2).forEach(el => console.log(el));