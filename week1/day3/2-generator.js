/**
 * Generator functions provide a clearer syntax for iterating over an object
 * This * tells Javscript that it is a generator function
 */

function* myGeneratorFunction(count,reps){
    // there is a special keyword for generators called yield
    // yield is an abstraction keyword over returning {value: 0, done: false}

    // yield 1; // assigning value of 1 -> { value : 1 } 
    // yield 2; 
    // yield 3; 
    // yield 4; 
    // yield 5;


    for (let i=0; i <= reps; i++){
        yield count++; // {value: count, done: False} is the equivilent
    }

    // when we reach the bottom of the function, next will return {value: undefined, done: true}
}

const myGenerator = myGeneratorFunction(0,5);
console.log(myGenerator.next());
console.log(myGenerator.next()); // call next one at a time. can pause, execute logic, perform other tasks, etc. and resume when ready
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());

const myOtherGen = myGeneratorFunction(5,20);
console.log(...myOtherGen);
