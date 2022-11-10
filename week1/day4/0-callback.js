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
 * after one second happens, I will execute function
 * 
 * Benefit of asynchronous code: allows us to do other stuff and not just wait around for it. 
 * i.e. a package is delivered to my door. i'm not sitting around waiting for it. i'm going about my day. 
 * when i'm ready for it, i grab it off the porch. it sits on the counter for a few hours while i do stuff, until i'm ready to open it.
 * 
 * JS environment (stack/heap) is the single thread of it. the webAPI is where the asynchronous comes into it.
 * like a UI update on the web, only happens when the stack is empty. if i put in an infinite loop, while(true), i cant do anything.
 * the stack will never deplete. the browser never gets the chance to repaint the page/UI. 
 * I'm only going to process these callback queues once the stack empties. 
 * so if you have some big blocking operation, its going to put a bottle neck on your code.
 * 
 * example pseudocode for set timeout
    function mySetTimeout(callback, time) {
        sleep(time); // sleep for this amount of time
        callback(); // now perform the function I asked you to
    }

    mySetTimeout(() => console.log('Callback!'), 3000);
 */

// first example

 function sayHello(){
    console.log('hello!')
    askAboutDay();
}

function askAboutDay(){
    console.log('how are you today?')
    setTimeout(sayGoodbye, 2000) // nesting functions within functions -> pyramid doom / callback hell (google image for examples)
}

setTimeout(sayHello, 1000) // registered this function as asynchronous, to "web API land"
// after 1 second, sayHello gets registered to the callback queue. 
// setTimeout is not a 'guaranteed time execution' but an at least time execution
// sayHello waits in the callback queue until the stack is ready for it
// the stack will NOT pull from the queue until it is empty
// so, code in the main code continues to run and completes. once completed, sayHello gets pulled from the callback queue back to the stack
// at this time, sayHello gets executed
// IF there is a blocking function on the main stack, i.e. a while(true) loop, sayHello will never execute because the callstack is never empty

function sayGoodbye(){
    console.log('goodbye!')
}


function nums (){
    console.log('123')
}

nums(); // occurs before above setTImeouts, even if they resolved after 0 seconds, because main thread finished before pulling from the queue

// -------------------------------------------------
// second example

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

// -----------------------------------------------
/**
 * setInterval: 
 * setInterval works as the same as setTimeout, but it repeats the process (until cancelation) at specified interval
 * first parameter: function to perform
 * second parameter: how often to perform (milliseconds)
 */

// setInterval({}, #)

// setInterval(()=> {console.log('im an interval')}, 2000)


// CLEAR INTERVAL
// set interval returns a number. like a key or a unique identifier for the interval. 
// can use another function, clearInterval, 
// which takes in the key, and its the interval to clear 
// otherwise, setInterval continues to run (think of it like the exit condition for a loop)

let count = 0;

const intervalKey = setInterval(()=> {
    console.log(intervalKey)
    console.log('im an interval');
    console.log(count++);
    if (count >= 1) {
        clearInterval(intervalKey) // once count reaches ten, clear this interval i.e. STOP
    }

}, 2000)

// ctrl + C  = signal interupt
// NOT control Z

// -------------------------------------

/**
 * 
 * Make lasagna..... a synchronous or asynchronous task?
 * 
 * chop onion
 * chop garlic
 * get out pot to make sauce
 * 1 tbsp olive oil in my pot
 * put pot on burner
 * turn on burner to heat
 *      wait for temp == x
 *          put onion and garlic in pot
 *          
 * 
 * am i waiting for the onion and garlic to cook, or am i doing these while i wait?
 *      stir every 30 seconds
 *      get out can opener
 *      open tomatoes, sauce, paste
 *      get meat from fridge
 *          add meat to pot
 *          get out spices
 *              add spices to pot
 *      continue stirring every 30 seconds
 *      add tomatoes, sauce, paste
 *      
 *  mix ricotta and ingredients for cheese blend
 *  get out lasagna dish
 *  prep lasagna by layering noodles, sauce, cheese, repeat
 *  cover with foil 
 *  oven x 45 minutes
 *  rest before serving
 * 
 * do i wait to preheat the oven or do it now? 
 * 
 * do i wait to cook the noodles or do it now?
 * 
 * do i clean up my dirty dishes, get the mail, start the laundry while i wait for the lasagna in the oven or do I do it now?
 * 
 * the point is, i dont do everything synchronously, ie i dont always wait for one task to complete before moving on to the next
 * some tasks i need to wait for them to complete before i can do something else, like i cant put the lasagna in the over before its prepped
 * so, i a way to handle asynchronous programming..............
 * 
 */