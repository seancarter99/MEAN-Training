/**
 * What is a callback?
 * A callback is simply a function passed to another function that will be called at a later point in time
 * 
 * Example: want to log in to my account. 
 * send an http fetch post request to send in my data. need to wait for the response to act on it.
 * 
 * Do this code, but only after something else happens.
 * 
 * Easiest way to show this time delay is with a setTimeout function
 * 
 * setTimeout is built into vanilla javascript
 * 2 parameters
 * a function, and a time in miliseconds
 * 1000 = 1 second
 * after one second happens, I will say hello
 * 
 */

// setTimeout is not a guaranteed time execution but an at least time execution

 function sayHello(){
    console.log('hello!')
    askAboutDay();
}

function askAboutDay(){
    console.log('how are you today?')
    setTimeout(sayGoodbye, 2000)
}

setTimeout(sayHello, 1000) // registered this function as asynchronous.
// 1000 ms = 1 second

function sayGoodbye(){
    console.log('goodbye!')
}


function nums (){
    console.log('123')
}

nums();

function sayHello() {
    console.log('Hello!');
    console.log('Registering goodbye callback');
    setTimeout(sayGoodbye, 3000);
    console.log('Doing more things');
}

function sayGoodbye() {
    console.log('Goodbye');
}


console.log('Registering hello callback');

setTimeout(sayHello, 3000);

console.log('Doing other things');

// setInterval({}, #)

// setInterval(()=> {console.log('im an interval')}, 2000)

let count = 0;

const intervalKey = setInterval(()=> {
    console.log(intervalKey)
    console.log('im an interval');
    console.log(count++);
    if (count >= 1) {
        clearInterval(intervalKey)
    }

}, 2000)

