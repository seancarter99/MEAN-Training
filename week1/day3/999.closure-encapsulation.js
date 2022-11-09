// we'll make a simple counter function with capabiity to increase, decrease, get and set the count
// this type of function is very common.
// react does this a lot with hooks.

function counter(initialCount=0) {
    // set our count to the argument or use default 0
    let count = initialCount;

    // by default, all variables and methods defined here are essentially private. 

    function increment() {
        count++;
    } // not returning a value

    function decrement() {
        // some check to ensure count doesnt drop below zero
        count--;
    }

    // note that this is commented out because I am demonstrating that I can define this function in the return object directly (see below line 37)
    // function getCount() {
    //     return count;
    // } // return a value

    function setCount(value) {
        // check if value > 0 before allowing count to be set; else maintain count
        count = value;
    } 

    // take notice that we are returning an object. additionally we are not returning count directly.
    return {
        increment: increment, // we are returning an object, ie key:value pairs

        minus: decrement, // i can rename the function when exporting. now the outer scope will use minus instead of decrement
        subtract: decrement, // i can return it as multiple names
        
        getCount: function () { // i can define the function directly in the return 
            return count;
        },
        
        setCount // if I want to return with the same name as the function, I can omit the repetition. this is the same as 'setCount: setCount'
    }
}

const myCounter = counter(100); // optional arg -> starting our count at 100
// console.log(myCounter.count) // does not have access to this variable
// myCounter.count = 99; // if i had returned count access it

// myCounter.increment(); // without return statement, do not have access to this method out here

console.log(myCounter.getCount());
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount());
myCounter.minus(); // notice this is our decrement function but we returned it as minus and subtract
myCounter.subtract();
console.log(myCounter.getCount());
myCounter.setCount(33);
console.log(myCounter.getCount());

// heres a banking example

function bankAccount(){
    let checking = 1000;
    let saving = 5000;

    return {
        displayBalance: function(){
            console.log(`Checking balance is ${checking} and savings balance is ${saving}!`)
        },

        depositFunds: function(amount){
            checking+=amount;
            console.log(`Deposited ${amount}. Checking balance is now ${checking}!`)
        },

        withdrawFunds: function(amount){
            if (checking < amount) {
                console.log(`ALERT: Insufficient funds for withdrawl of ${amount}. Balance is ${checking}.`)
            } else{
                checking-=amount;
                console.log(`Withdrew ${amount}. Checking balance is now ${checking}!`)
            }
        },
    }
}

const myBank = bankAccount();
myBank.displayBalance();
myBank.depositFunds(400);
myBank.displayBalance;
myBank.withdrawFunds(500);
myBank.withdrawFunds(500);
myBank.withdrawFunds(500);