// expanded version of restaurant code from class

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
}

// Math.random() returns 0<= num <= 1. multiply it by 'max', in this case we're saying 30 to give it a 50/50 chance of resolving.
// Math.floor round down to return an integer instead of a decimal
const waitingforTable = checkInForTable(Math.floor(Math.random() * 30));

waitingforTable
    .then((msg) => { // handles resolved promises. this block also can return a promise
        console.log('in .then 1')
        console.log(msg)
        return 'seated at table';
        // throw 'oops! tables not cleaned yet';
    })
    .then((msg)=> {
        // console.log('in .then 2')
        console.log(msg)
        console.log('heres your menu')
        return;
    })
    .then(() => {
        // console.log('in .then 3')
        const foodOrdered = orderFood()
        return foodOrdered;
    })
    .then(msg => {
        // console.log('in .then 4')
        console.log(msg)
    }) 
    .catch((error) => { // handles rejected promises
        // console.log('in .catch')
        console.error(error)
    })


// ----------------------------------------------------------
// we're going to add in a food order

const menu = ['macaroni', 'lasagna', 'fettuccine alfredo', 'spagetti', 'chicken marsala']
const notServing = ['macaroni']

// choose random item from the menu
const getRandomOrder = (menu) => {
    return Math.floor(Math.random() * (menu.length));
}

const orderFood = (order) => {
    // need time to think about order..... 
    console.log('what should I order...')
    const menuIndex = getRandomOrder(menu);
    console.log('I want to order ' + menu[menuIndex])
    const myOrder = menu[menuIndex];
    return new Promise((resolve, reject)=> {
        // if (myOrder) {
        if (notServing.includes(myOrder)) {
            reject('I\'m sorry but we are out of ' + myOrder)
        } else {
            resolve('Kitchen is preparing your order!')
        }
    })
}
