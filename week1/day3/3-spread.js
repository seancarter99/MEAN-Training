// The spread operator takes an ITERABLE and fans out it's contents OR it's object properties
// Iterables = arrays, strings, other structures that we have made iterable (see iterator and generator)
// Objects are not actually iterable, but we can spread them. think of it as a special exception.

// the spread operator is really helpful when I want to copy an array or objects contents into a new array/object

const animals = ['cat', 'dog', 'turkey', 'otter'];

// I want to make a copy but I didnt actually; I made a reference variable point to the same animals array as before
// const myAnimals = animals;
// // when I push to myAnimals, it is also effecting my original array
// myAnimals.push('penguin');

// console.log(myAnimals);
// console.log(animals);

const myAnimals = [animals, 'monkey', 'cobra']; // output is an embedded array
// console.log(myAnimals);
// console.log(myAnimals.length)

// here is the spread operator. it copies the elements from the old array into the new one. 
const newAnimals = [...animals, 'lizard']; // can add new animals as well (before or after the spread)
// console.log(newAnimals);
newAnimals.push('monkey'); // when I add elements to my newAnimals array, it does not effect the old array (animals)
// console.log(newAnimals);
// console.log(animals);

newAnimals.push('lion') // this mutates the newAnimals array and adds our elements
const myOtherAnimals = [...newAnimals, 'lion'] // the one leaves newAnimals untouched and creates a new array that is a copy plus our addition

// similarly, we can use the spread operator on an object!

const student = {
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }, 
    major: 'Computer Science',
    courses: ['Computer Science', 'Calculus', 'Spanish', 'Pottery', 'English Literature'],
    dorm: 'Henley'
}

// without the spread operator, in order to make a copy of my student, I was doing something like this
const copyOfStudent = {};
for (let prop in student){
    copyOfStudent[prop] = student[prop]
}
// console.log(student);
// console.log('-----------------------');
// console.log(copyOfStudent);

// with the spread operator, I can do the same as the for..in loop, but do it much more concisely
// const studentCopy = {...student};

const studentCopy = {major: 'undecided', ...student}; // create a default for major. spread student, if there is a major, overrides the default
// console.log(studentCopy)

// const studentTwo = {...student, dorm: 'Pralle'} // spread student into new object. overrides dorm with provided property. can also add new properties.
// console.log(studentTwo)

// spread is only copying the enumerable properties. If one is not enumerable, it won't be copied. 
// Paste below line of code after object and before spreading it to new object
// Object.defineProperty(student, 'dorm', {enumerable: false}); // dorm will not be copied into our spread object

// use case : making a password generator. capitals, lowercase, numbers
// const charArray = ['a', 'b', 'c', 'd', 'e']

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const charArray = [...alphabet];
console.log(charArray)

const letters = charArray.join(''); // this is how you can join an array to a string. use parameter for what to join on. 
console.log(letters);

const word = 'Hello world!';

const wordArray = [...word.slice(0, 5), '?']; // can use methods with our spread 

console.log(wordArray)