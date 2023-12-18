// The join() method joins all the elements of an array into a string using a specified separator.
// It takes one optional argument: the separator to use.

// Examples:
const arr= ['cow','hen','cat', 'dog'];
const str=arr.join(); // no specified separator
console.log(str); //'cow,hen,cat,dog'

const arr2= ['cow','hen','cat', 'dog'];
const str2=arr.join(' '); //specified separator is space
console.log(str2); //'cow hen cat dog'

const arr3= ['cow','hen','cat', 'dog'];
const str3=arr.join('.'); //specified separator is .
console.log(str3); //'cow.hen.cat.dog'