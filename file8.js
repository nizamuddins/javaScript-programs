// typeof operator 

// data types (primitive data types)
// string "nizam"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

let age = 22; 
let firstName = "nizam";
console.log(typeof age);

// // 22 -> "22"
// // convert number to string.
// oneway 
age = age + "";
console.log(typeof(age)); 
// second way
age = String(age);
console.log(typeof age);

// // convert string to number. 
// one way 
 firstName = +firstName;
console.log(typeof firstName);

// second way 
firstName = Number(firstName);
console.log(typeof firstName);