// how to iterate object 
const person = {
    name: "nizam",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "praying"]
}

// for in loop 
// Object.keys 

// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key," : " ,person[key]);
// }
console.log(person["person hobbies"]);
person["person hobbies"].push("swimming");
console.log(person["person hobbies"]);

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// } 