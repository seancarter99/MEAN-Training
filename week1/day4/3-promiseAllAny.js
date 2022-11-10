/**
 * If I have 3 separate promise I want to happen the same time, but I need all promises to be resolved before continuing, I should Promise.all
 */

 const simulatedLatency = (time, speed) => { //pretend these are emulating network speeds
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (speed == 'slug'){
                reject('Calling for help, can\'t find my friend')
            } else {
                resolve(`${speed} promise finished`)
            }
        }, time)
    })
}

const friendOneWentRight = simulatedLatency(0, 'slug');
const friendTwoWentLeft =  simulatedLatency(1500, 'slug');
const friendThreeWentStraight = simulatedLatency(3000, 'slug');

// i need friend two AND one AND three (all need to resolve to trigger .then())
Promise.all([friendTwoWentLeft, friendOneWentRight, friendThreeWentStraight])
    .then(data => {
        console.log('Inside promise.all .then block')
        console.log(data) // data is what was resolved from the promise
    })
    .catch(error => { // This catch triggers the second any of promises fail
        console.error('Inside promise.all .catch block')
        console.log(error)
    })
    .finally(()=> { // JS also has a finally block
        console.log('finally in all')
    })

// I'f I don't care which resolves and am not reliant on them all resolving, I should use promise.any
// leave other 2 friends behind. go with the quickest one

// i need two OR one OR three (only 1 needs to resolve to trigger .then())
Promise.any([friendTwoWentLeft, friendOneWentRight, friendThreeWentStraight])
    .then(data => {
        console.log('Inside promise.any .then block')
        console.log(data) // data is what was resolved from the promise
    })
    .catch(error => {
        console.error('Inside promise.any .catch block')
        console.log(error)
    })
    .finally(()=> { // JS also has a finally block
        console.log('finally in any')
    })