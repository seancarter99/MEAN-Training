myFunction(); myFunction(); // Semicolons are optional in JS

function myFunction() {
    console.log('Inside myFunction\'s body!');
}

myFunction()

function greetPerson(person) {
    // Template String
    // Anything inside the ${} is JS code and will be injected at that point in the string
    console.log(`Hello ${person}!`);

    // CTL + / to comment a whole line
    // console.log('Hello', person) // 'Hello' + ' ' + person effectively. Similar Python
    // console.log('Hello ' + person); // String concatenation
}

greetPerson('Sean');
greetPerson('Jordan');
greetPerson(); // Whenever a variable does not take on a value in JS, its value is undefined
greetPerson(undefined); // This is effectively same as the line above

// Default parameters
// If width is "undefined" assign it the value of 2
// Allows our function to take a variable number of arguments

// If my function takes 2 parameters, treats as a Rectangle
// If it takes 1 parameter, treat it as a Square
function calculateArea(length, width=length) {
    console.log('Rectangle area is:', length * width);
}

calculateArea(10, 20, 24, 'A'); // 24 and 'A' are ignored because the function takes 2 params
calculateArea(10);

console.log(10 * undefined) // JS cannot calculate this, so it just says the answer is "Not A Number"