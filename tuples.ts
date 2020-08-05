/* Tuples */

// Regular array
let arr = ['something', 45, true];
arr[0] = false; // allowed
arr[1] = true; // allowed

// Tuple (every element is fixed)
let tup: [string, number, boolean] = ['martin', 33, true];
tup[0] = false; // now allowed
tup[1] = 33; // allowed
tup[2] = 'hello'; //not allowed
