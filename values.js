// The values() method returns an Iterator that provides values for each index in the array.
// It takes no arguments.

// Example
const arr= ['kevin', 'victor', 'jane'];
const iterator = arr.values();

for(const value of iterator){
    console.log(value); //output: kevin victor jane
}