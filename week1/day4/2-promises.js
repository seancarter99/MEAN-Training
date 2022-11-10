/**
 * Promises were released as an answer to callbacks (2015)
 * 
 * Nested callbacks (Pyramid of Doom OR Callback Hell) they work, but the code looked so bad
 * - Hard to read and maintain
 * 
 * Promises are an object that represent the eventual success or failure of an asynchronous operation
 * 
 * Promise states:
 * 
 * Pending: The asynchronous operation is still occuring
 * Resolved: The asynchronous operation was a success (good ending) // like fulfilled
 * Rejected: The asynchronous operation was a failure (bad ending) 
 * Settled: The promise is done and the callback was executed 
 * 
 */



/**
 * Restaurant example: 
 * 1. I check in with the hostess
 * 2. She says theres a wait (15 mins)
 * 3. She gives me buzzer
 * 4. Buzzes after 15 minutes / when table is ready
 */

const checkInForTable = (minutedElapsed) => {
    console.log('arrived at restaurant')
    console.log('speaking with hostess');
    console.log('theres a wait. its about 15 minutes');
    console.log('she gave me a buzzer');
    return new Promise((resolve, reject)=>{
        console.log(`its been ${minutedElapsed} minutes`)
        if (minutedElapsed < 15) { // if its been less than 15 minutes, reject promise because table isnt ready yet
            reject('table not ready yet. i am bugging the hostess and she is annoyed')
        } else {
            resolve('table ready!') // if its been 15 min or more, resolve promise! 
        }
    })

    // return new Promise((resolve, reject)=> {
    //     // handler for what will make it resolve
    //     // handle for rejection
    // })
}

// Math.random() returns 0<= num <= 1. multiply it by 'max', in this case we're saying 30 to give it a 50/50 chance of resolving.
// Math.floor round down to return an integer instead of a decimal
const waitingforTable = checkInForTable(Math.floor(Math.random() * 30));

waitingforTable
    .then((msg) => { // handles resolved promises. this block also can return a promise
        console.log('in .then 1')
        console.log(msg)
        // return 'seated at table';
        throw 'throwing an error' // throw = rejected promise
    })
    .then((msg)=> {
        console.log('in .then 2')
        console.log(msg)
            // give a menu
        console.log('heres your menu')
    })
    // could continue to chain .thens ie place an order, etc.
    .catch((error) => { // handles rejected promises
        console.log('in .catch')
        console.error(error)
    })

// 1. then/catch can 'return' resolved promises or 'throw' rejected promises.
// 2. if first .then throws a rejection, a catch below it will handle.
// 3. you can chain .thens after .catch
// 4. blocks are handled top down. ie if theres a error thrown at the bottom block, a catch ABOVE it will not catch it. 

// -----------------------------------------------------
// promises are commonly used to handle network requests 

const makeNetworkRequest = (userLogin, userData) => {
    console.log('making network request....')
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('processing.....')
            if (userLogin === 'fail') {
                reject({msg: 'wrong credentials; please try logging in again'})
            } else {
                resolve({msg: 'welcome user!', userData, status: 200})
            }
        }, 2000)
    })
}

const myRequest = makeNetworkRequest('success', {name: 'haley'})

myRequest
    .then(data=>{ // .then returns a promise as well so you can chain them 
        console.log(' first .then ')
        console.log(data)
        if (data.status === 200) {
            console.log(data.status);
            return 'successful promise' // return in a .then is returning a resolved promise implicitly (like saying return Promise.resolve('resolved promise'))
                    //whatever is returned here is sent to the next .then
        } else {
            throw 'status code error' // any throw statement will be interpreted as returning a rejected promise
        }
    })
    .then((x)=> { // common to use data but can use anything, i.e. x
        console.log(' second .then ')
        console.log(x)
    })
    .catch((error)=>{
        console.log(' .catch')
        console.error(error)
    })