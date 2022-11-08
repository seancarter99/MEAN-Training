/**
 * Creating custom errors is great when you want to signify something more specific than you could
 * with the baser Error objects provided by JS
 */

class PasswordValidationError extends Error {
    
    // #message;
    #name;

    // message represents the error message
    constructor(message) {
        super(message); // Let the Error class handle the initialization of our message
        this.#name = 'PasswordValidationError';
    }

    // Getters and setters for message
    // get message() {
    //     return this.#message;
    // }

    // set message(message) {
    //     this.#message = message;
    // }

    get name() {
        return this.#name;
    }
}


try {
    let password = 'abc12345';

    if (password.length < 8) {
        throw new PasswordValidationError('Password must contain at least 8 characters');
    } else {
        console.log('Password approved!');
    }
    
} catch (err) {
    console.log(err.name);
    console.log(err.message);
}

// In JavaScript, literally ANYTHING can be thrown using throw keyword

try {
    // throw 'My Error String!';
    // Creating an inline "error" object
    throw { name: 'SyntaxError', message: 'Whatever' };
} catch (err) {
    console.log(err);
    try {
        // Errors thrown in catch must be handled by a try catch
        throw err;
    } catch (err) {

    }   
}

function fnThatThrowsError() {
    throw new Error();
}

function someFn() {
    fnThatThrowsError();
}

try {
    someFn(); // Because that function throws an error, calling it should be done with a try/catch
    console.log('This doesn\'t run');
} catch (err) {
    console.log(err.name);
// console.log();
} finally {
    // finally will run regardless of whether an error was thrown or not
    console.log('I run regardless');
}