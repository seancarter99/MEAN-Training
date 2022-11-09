/**
 * rest operator: ... just like spread! 
 * 
 * in Javascript, we don't have the ability to overload methods like we do like Java. 
 * We cannot have a function that is refined for different parameters.
 * 
 * like var args in java ... public static void main(String... args){}
 */

// can I call this with no arguments? one argument? 5 arguments? 
function addition(x,y){
    return x+y;
}

console.log(addition(2,3,4,6)); // will omit arguments after the 2 it is expecting
console.log(addition(1)); // when we run with one argument, we will get NaN because we are adding 1 + undefined

// use the rest operator!
function additionWithRest(...nums){ // now we have a function that can take a variable amount of arguments
    let sum = 0; // start with a sum of 0
    for (let num of nums) {
        sum += num; // add each argument to our sum
    }
    return sum; // make sure to return it
}

console.log(additionWithRest(1, 4, 7, 15, 22)); // returns 49 (5 arguments)
console.log(additionWithRest(5, 4)); // returns 9 (2 arguments)
console.log(additionWithRest(11)); // returns 11 (1 argument)


// rest does the opposite of spread by taking many things and condensing them into one
function printMovies(movie1, movie2, movie3, ...otherMovies){ // rest operator has to come last
    console.log(`The number one movie is ${movie1}`);
    console.log(`The number two movie is ${movie2}`);
    console.log(`The number three movie is ${movie3}`);
    console.log(`And for the rest of the movies...`);
    console.log(otherMovies);
}

printMovies('The Dark Knight', 'Top Gun', 'Titanic', 'Matrix', 'All The Bright Places', 'The Shawshank Redemption'); 