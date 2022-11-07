// Variable declaration choices
/**
 * var
 * 
 * Either function scoped OR global scoped depeneding on where it is defined
 * Redeclare the variables AND reassign a new value
 *  
 */ 



function myFunction() {
    var a = 5; // Var is function scoped here because it was defined in a function
    // This does not effect the global scoped variable 'a'
    console.log(a);
}
myFunction();

console.log(a);

// Declares a variable called a and assigns it the value 1
var a = 1; // Var is global scoped here because it was defined "top-level"
var a = 5; // This is completely valid (and unintuitive)

/**
 * int x = 5;
 * int x = 10;
 */

/**
 * Variables in JS are "hoisted" to the top of their scope upon declaration
 * Hoisting allows us to refer to variables BEFORE their declaration
 */
function variableHoisting() {
    // var firstName; Declares the variable at the top of its scope
    console.log(firstName) // Prints undefined
    // console.log(lastName);
    if (false) { // This never runs
        var firstName = 'Joe';
        // let lastName = 'Smith'; // This value is hoisted to the top of the if block
    }
    
    // let lastName = 'Smith'; // This is hoisted to the top of the function
    
    console.log(firstName); // Prints Joe (now undefined with the if block)
}

variableHoisting();

/**
 * let
 * 
 * let is block scoped (it is accessible within a code block {}'s )
 * 
 * Let IS hoisted to the top of its scope just like var
 * BUT you cannot access its value before initialization
 * The space between let and where it was hoisted and where it was assigned a value is called
 *  the "Temporal Dead Zone"
 * 
 * Let does allow reassignment BUT it does NOT allow redeclaration
 * 
 * 
 * NOT ALLOWED:
 * console.log(age);
 * let age = 15; 
 */

let b = 'b';
b = 'B'; // This is allowed (reassignment)
// let b = 25; // This is not allowed because b is already declared

console.log(something);
if (false) {
    var something = 'something'; // With var this is okay. Let and const, no
}

/**
 *  const
 * 
 * Const functions the same as let, but it also prevents reassignment
 * 
 * Const is very similar to final in Java
 */

const turtle = 'Boxer';
// turtle = 'Snapping'; // This is not allowed for const

console.log(turtle);