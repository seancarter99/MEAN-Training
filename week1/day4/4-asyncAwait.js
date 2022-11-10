// Promises = ES6 2016; Async-await = ES7 2017

/**
 * async/await builds on top of Promises as a cleaner way of handling promises
 * 
 * Instead of using .then and .catch, we write our Promise handlers as we normally would
 * 
 * We write our asynchronous the same as our synchronous code
 */

// To use async/await we must define async functions

// const myFirstAsyncFunction = async () => {}

async function myFirstAsyncFunction() {
    return 'Hello Async!'; // Just like .then, anything returned in an async function will automatically be wrapped in a Promise
}

// The async function returns a promise, and I can unpack it using .then()
// BUT this is not the most intuitive way to write our code 
myFirstAsyncFunction()
    .then(msg => console.log(msg))
    .catch(err => console.error(err + ' Error'));


const withAwait = async () => {
    const msg = await myFirstAsyncFunction(); // await acts the same as .then. It auto unpacks Promise to get the resolve value
    console.log(msg + ' inside with Await');
}
    
withAwait(); 

// ------------------------------------------------------------------

const shop = async () => {
    await new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('shopping at store');
            resolve();
        }, 2000)
    })
}

const chop = async () => {
    await new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('chopping vegetables');
            resolve();
        }, 2000)
    })
}

// const makeSauce = async () => {
//     await new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             console.log('making sauce');
//             resolve();
//         }, 2000)
//     })
// }

// const makeSauce = async () => {
//     await setTimeout(()=>{
//             console.log('making sauce');
//         }, 2000)
// }

const bake = async () => {
    await new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('in the oven');
            resolve();
            // reject('oven broke');
        }, 2000)
    })
}

const eat = async () => {
    await new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('eating');
            resolve();
        }, 2000)
    })
} 

const makeLasagna = async () => {
    /**
     * tasks to perform:
     * 1. buy ingredients
     * 2. chop vegetables
     * 3. make sauce and cook noodles
     * 4. bake lasagna
     * 5. eat
     */
    try {
        await shop();
        await chop();
        await makeSauce();
        await bake();
        await eat();
    } catch (error) {
        console.error(error)
        console.log('ordering take out')
    }
}

makeLasagna();