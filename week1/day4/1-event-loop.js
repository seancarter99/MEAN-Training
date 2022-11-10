console.log('1');

setTimeout(() => console.log('2'), 1000); 

setTimeout(() => console.log('3'), 0);

Promise.resolve('4').then(data => console.log(data)); 

console.log('5');

// 1 - 5 - 3 - 4 - 2
