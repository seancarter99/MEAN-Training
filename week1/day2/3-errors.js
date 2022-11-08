/**
 * try/catch block
 * 
 * try - Runs code that "may" throw an error
 * catch - Runs code as soon as an error is thrown in the try block
 */

try {
    console.log('Hello World!');
    throw new Error(); // throw keyword will trigger the catch block
} catch (err) {
    // This code only runs when an error is thrown
    console.log('Error caught!');
}

// throw new Error(); // An unhandled error will cause the program to completely halt
// console.log('This never runs');


// Handling different errors

try {
    // throw new SyntaxError('Invalid type');
    // throw new RangeError('Invalid type');
    throw { name: 'SyntaxError', message: 'Whatever' };
} catch (err) {
    // In JS, you can only have 1 catch block associated with a single try block
    // if (err.name === 'TypeError') {
    //     console.log('TypeError handler');
    // } else if (err.name === 'RangeError') {
    //     console.log('RangeError handler');
    // }

    // switch statement
    // You may use switch the same general way as you would an if/else block
    switch(err.name) {
        case 'TypeError':
            // This code runs when a TypeError is thrown (or an object with a property called name is thrown with the value of TypeError)
            console.log('Handling TypeError');
            break; // Exits the code block (switch statement) and prevents falling through
        case 'SyntaxError': // That print will trigger for both Syntax OR Range errors
        case 'RangeError':
            console.log('Handling RangeError OR SyntaxError');
            // If RangeError case is met, it will continue falling through into the default case
        default:
            console.log('Handling some other Error type');
    }

    // console.log(err.name);
}

/**
 * try {
 * }
 * catch (NullPointerException e) {}
 * catch (ArithmeticException e) {}
 * catch (Exception e) {}
 */