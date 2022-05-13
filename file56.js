// map method 
// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

const users = [
    {firstName: "nizam", age: 23},
    {firstName: "nayeem", age: 21},
    {firstName: "afzal", age: 22},
    {firstName: "ashraf", age: 20},
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames); 