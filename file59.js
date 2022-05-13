// sort method 
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57



// sort  

// 5,9,1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected)

// ["5", "9", "1210", "410", "3000"] 
// [53, 57, 49, 52, 51]

const userNames = ['nizam', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Nizam'];
userNames.sort();
console.log(userNames);

// const numbers = [5,9,1200, 410, 3000];
// numbers.sort((a,b)=>{
//     return b-a;
// });
// numbers.sort((a,b)=>a-b);
// console.log(numbers);

// 1200,410 
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4 
// price lowToHigh HighToLow 
const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]

// lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price
});
console.log(lowToHigh);

const highToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});
console.log(highToLow);




const users = [
    {firstName: "nizam", age: 23},
    {firstName: "nayeem", age: 21},
    {firstName: "ashraf", age: 22},
    {firstName: "zara", age: 20},
]


 var user1 = users.sort((a,b)=>{
    if(a.firstName > b.firstName){
        return 1;
    }else{
        return -1;
    }
});

console.log(user1); 