// The copyWithin() method shallow copies part of an array 
// to another location in the same array and returns the modified array without modifying its length.
// takes in arguments:
// 1. target;
// 2. start;
// 3. end;

// Example;
let numbers=[1,2,3,4,5];
numbers.copyWithin(2,0,2);
console.log(numbers); //output: [ 1, 2, 1, 2, 5 ]
