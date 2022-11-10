console.log('1');

setTimeout(() => console.log('2'), 1000); 

setTimeout(() => console.log('3'), 0);

console.log('4');

// 1 4 2 3 
// 1 4 3 2 
// 1 2 3 4 