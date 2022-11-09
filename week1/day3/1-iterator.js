/**
 * An iterable object follows the iterator protocol
 * 
 * Arrays and strings are iterable by default

In order to follow the iterator protocol, we need to:
- return a function called next() that returns an object
- Object has to contain 2 properties: 
    1. the value that we are currently looking at
    2. done is whether I'm done looping yet or not

next() {
    return {
        value: '',
        done: false or true
    }
}

Iterables:
can use spread operator, forEach, for..of
can pause, execute logic/manipulation, etc. when we want to

In order for JS to recognize that we are following the iterator protocol, must add the [Symbol.iterator]

This lesson is to show what is going on in the background and under the hood. Take away the functionality of an iterable. 

Usually I won't be making objects that are iterable.
Instead I will be storing them in a container that is iterable, most commonly an array.

 */

// constructor function; could also build with a class
function Range(count, limit){
    // we will take a count and a limit 

    // set up our variables first
    this.initial = count; // start off at the count provided
    this.count = count; // create a count variable, also the count provided
    this.limit = limit; // limit will be out max

    // we need a property called next. Next is a function that returns an object (with a value and done)
    // the purpose of next is to figure out where I am at in the loop
    // each time next is called, I move one in the loop
    this.next = function() {
        // increment the count
        this.count++;

        // determine if I'm done looping - have I reached the limit?
        if (this.count > this.limit){
            // if so, I want to return {done: true}. value doesnt matter here as we've reached our done condition
            return {
                value: null,
                done: true
            }
        } else {
            // we haven't reached our limit / not done looping yet
            return {
                value: this.count, // value of the current count we're looking at
                done: false // we are not done iterating yet
            }
        }
    }


    // this is how we tell JS that it is an iterable. JS will not recognize this as an iterable without the Sympbol.iterator.
    // use brackets to inject the value returned by Symbol.iterator as the key. if we used dot notation, would be adding looking for a property called Symbol on this, the iterator on symbol
    this[Symbol.iterator] = function() {
        return this;
    }
}

const myRange = new Range(0,5);
console.log(myRange.next().value); // use .value to get the current value we are looking at
console.log(myRange.next());
console.log(myRange.next());  
console.log(myRange.next()); // benefit of iterating through manually: pause here and execute some logic, mutation, etc. 
console.log(myRange.next());
console.log(myRange.next()); // after we hit our limit of 5, done is true 
console.log(myRange.next());

const myOtherRange = new Range(0,10);

console.log(...myOtherRange); // by using the spread operator, we are taking the iterable myOtherRange and faning out it's contents.
// this recursively calls itself/next until it hits that done: true 
// ** if we did not have the Symbol.iterator, JS would not recognize this as interable and we couldn't use the spread operator! 
// since we do recognize this as an iterable, we can use spread and call recursivevly until done: true

// we can iterate over iterables using the for..of loop 
// strings and arrays are iterable
// objects are NOT iterable, but spread operator makes a special exception for them though.

// maps are iterable
const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log(...map); // can spread a map

for (let key of map){ // can use for..of for a map
    console.log(key)
}

