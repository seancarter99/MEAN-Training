/**
 * Arrow functions are lightweight, annonymous functions
 * It is a compact version of a traditional function expression
 * It is the equivilent to a lambda in Java
 * 
 * 
 * There are some rules: 
 * 1. Regarding parameters and when to use ()
 *      - If there are no parameters for the function, you must start with () => 
 *      - If there is exactly one parameter for the function, we can omit the ()
 *      - If you have 2+ parameters, you Must have the (first, second); 
 * 2. In a function expression, remove the function keyword and place an arrow (=>) between parameters and function body {}
 * 3. If the function is one line long, you many omit the {} for the function body
 *      - It will implicitly return from the one line
 *      - You MAY NOT use the return keyword when omiting the {} with a one line function
 * 4. When you do use {} for the function body (i.e. not a one line function), you MUST use the return keyword to return a value
 * 
 * It does have a limit as to when it can be used... do not use in object methods because of the binding of 'this' keyword
 * 
 * 
 * const fx = () => {}

 */

// Reviewing functions - what is a declaration and an expression

function calcArea(x,y){ // this is a function declaration - are hoisted
    return x*y
}; 

const calcMyArea = function(x,y) { // this is a function expression - are NOT hoisted (can not be used above the time they are declared)
    return x*y
} 

// Turn this into an arrow function:
// 1. remove function keyword and use arrow.
// 2. () around parameters according to rules (see above)
// 3. either use {} with return statement OR if your fx is a single line you can omit the {} (and if you do, must omit the 'return' keyword too)

const calculateArea = (x,y) => { // if I have two arguements, I must have () surrounding them
  return x*y; // need the return keyword if I want my function something within {}
} 

console.log(calculateArea(5,5));

const calculateSquareArea = x => { // can omit () around parameters if there is only one
    return x*x; 
} 

const greet = () => { // if I have no parameters, I need empty parenthesis () 
    console.log('hello')
}

// with a one line function, I can omit the {} as well as the return keyword (will implicitly return)
const calculateAreaOneLiner = (x,y) => x*y;

/*
Review: 
const functionA = name => name.toUpperCase(); // good
x,y => return x*y; // bad = need () for 2 args AND cannot have return; 
(x,y) => { x*y }; // good, but we wont get the value returned
(x,y) => { return x*y } // good

**/ 

// Arrow functions cannot be used as OBJECT METHODS
/*
Arrow functions do not bind to the 'this' keyword anf for that reason cannot be used as object methods
THe 'this' keyword binds to the environment it is created in. 
In a object method using a regular function (no arrow), 'this' binds to the object.
With an arrow function as object method, 'this' binds to the OUTER environment and NOT to the actual object.

SUMMARY: If you attempt to use arrow functions as object methods it will not work as intended. 
This is the major caveat to using arrow fxs, aka the one place NOT to use them
*/

const obj = {
    name: 'haley',
    hello: function() {console.log(`hello ${this.name}`)}, // this.name is haley
    goodbye: () => console.log(`goodbye ${this.name}`) // this.name is undefined because it is an arrow function
}

obj.hello();
obj.goodbye();