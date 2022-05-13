// undefined 
// null

let firstName;
console.log(typeof  firstName);
firstName = "nizam";
console.log(typeof firstName, firstName);

let myVariable = null;
console.log( typeof myVariable);
myVariable = "nizam";
console.log(myVariable, typeof myVariable);
// console.log(typeof null);
// bug , error 

// BigInt
let myNumber = BigInt(12145671234567890);
let sameMyNumber = 123n;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber+ sameMyNumber);