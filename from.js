// The from() method creates a new array from an array-like object or an iterable object.
// It can take upto two arguments: 
// 1. the object to convert to an array, and 
// 2. a mapping function to apply to each element of the new array

const obj= {0:'apple', 1:'banana', 2:'cherry', length:3};
const arr= Array.from(obj);
console.log(arr); //output: ['apple', 'banana', 'cherry']


const lis='12345';
const arr2=Array.from(lis);
console.log(arr2) //output: [ '1', '2', '3', '4', '5' ]