// Complex (Trivia Knowledge)

// Bracket notation

// Bracket notation allows us to set properties that typically wouldn't be allowed

const obj = {}

obj['first name'] = 'Josh';

console.log(obj);

// Using bracket notation when declaring an object

const firstName = 'Sally';

const obj2 = {
    [firstName]: firstName,// Sally: 'Sally'
    firstName: firstName, // firstName: 'Sally'
    firstName // This is the same as the line above, but it's shorthand (firstName: firstName)
}

console.log(obj2);

const musician = {
    name: 'Shawn Carter',
    favoriteSong: 'Run This Town',
    age: 52,
    location: 'NYC',
    spouse: 'Beyonce'
}

Object.defineProperty(musician, 'spouse', {writable: false});

Object.defineProperty(musician, 'spouse', {writable: true});

musician.spouse = 'Sean Carter'; // This line will have no effect

Object.defineProperty(musician, 'location', {enumerable: false}); // Doesn't show in console.log or for..in loop

// Location still exists and is accessible, you just need to know it by name

console.log(musician);

console.log(musician.location);

// Configurable is true by default, once it's false, nothing can be edited about the object
Object.defineProperty(musician, 'spouse', {configurable: false});

// Object.freeze()

const arr = [1, 2, 3];

Object.freeze(arr);

arr[2] = 100;
// arr.push(4);

console.log(arr);

for (let num of arr) {
    console.log(num);
}