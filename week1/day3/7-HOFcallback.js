/**
 * In javascript, functions are 'first class citizens'
 * That means they are essentially objects and can be treated as such
 * You can add on properties to functions, including other functions
 * Anything non-primitive in JS is an object (aka functions)
 */

const greet = name => console.log(`Hello ${name}`);

greet('haley');

const goodbye = () => console.log('goodbye');

greet.goodbye = goodbye; // greet (our function) is an object! can add to it, including other functions or variables

greet.goodbye(); 

greet.myCat = 'Tobias'

console.log(greet.myCat);

/**
 * A higher order function in Javascript (HOF) is a function that TAKES another function as a parameter OR RETURNS another function. 
 */

function multiply(x) { // higher order function because it is returning a function
    return function(x){
        return x*x;
    }
}

const nums = [1,2,3,4,5,6,7,8]

//defining the function inside of the parameters
nums.forEach((function(num) { // higher order function because it takes another function as a parameter, in this case it is anonymous
    console.log(num)
}))


// defining function seperately and inputing into the 'action' slot in our parameters
const forEachInArray = (arr, action) => {
    for (let el in arr) {
        action(el);
    }
}

function printItem (item) {
    console.log(item)
}

forEachInArray(nums, printItem)

// higher order function with an arrow function as a parameter; also it's annonymous
nums.forEach(num => console.log(num)); // purpose of arrow function/why they were created

/**
 * CALLBACK FUNCTIONS
 * A callback function is simply a function that is passed to another function as an argument
 * A callback function is invoked by the other function at the appropriate time
 * i.e. done later in time; wait for user submission before executing; etc. 
 * 
 * function greeting(name){console.log('Hello' + name)}
 * 
 * function processUserInput(callback) { // function takes a callback function
 *  const name = prompt('please enter your name') // we'd wait for the user's name then call the callback function with their input
 *  callback(name)
 * }
 * 
 * processUserInput(greeting) // pass greeting as the callback fx
 * 
 * 
 *  Callback functions can be:
 -- inline callback: array.map(function(element){ code block })
 -- defined elsewhere: array.map(fxDefinedElsewhere);
 -- use arrow syntax: array.map((element) => { code block })
 * 
 */