// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"nizam",age:22};
const person = {
    name: "nizam",
    age: 21,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects 
// console.log(person["name"]);
console.log(person["age"]);
// console.log(person.hobbies);

// Array destructuring

// let [var1,var2,var3] = person.hobbies;
// console.log(var1);



// how to add key value pair to objects
person["person"] = "male";
console.log(person); 