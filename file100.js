// // // parameter destructuring
// // const obj1 = {
// //     name:"nizam",
// //     age:21,
// //     school:"dbhs"
// // }

// // console.log(obj1);
// // const {name,age,}=obj1;
// // console.log(name);

// // function object({name:var1,age:var2}){
// //     var output=("iam "+var1 +" and my age is "+var2);
// //     return output;


// // }
// // console.log(object(obj1));


// // var elements = ["mango","apple","orange"];

// // function array (array1){
// // var array2=[...array1];

// // return array2;


// // }

// // var ans=array(elements);
// // console.log(ans);



// // Callback function



// // const myFunc = 
// // function myFunc(num1,num2){

// //    return num1+num2; 
// // // console.log("iam from liet")

// // }


// // function myFunc2(name){

// // console.log( name(2,3));




// // }
// // myFunc2(myFunc);

// // ...............

// // Returning Function




// // const myFunc = function (){

// // //    return num1+num2; 
// // console.log("iam from liet")

// // }


// // function myFunc2(){

// // // console.log( name(2,3));
// // // name();

// // return myFunc;  
// // }
// // // console.log(myFunc2());
// // var ans=myFunc2();
// // ans();


// // Foreach method

// // const array = [1,2,3,4];

// // function myFunc(number){

// // var output=number*2;
// // console.log(output)

// // }
// // array.forEach(function(number){
// //     console.log(number*2);
// // });
// var array =[    
//     {name:"nizam",age:21},
//     {name:"nayeem",age:32}
// ]


// // array.forEach((user)=>{

// // console.log(user.name);


// // })


// function print(user,index){

// console.log(user.name,user.age,index)



// }

// // for(let i=0;i<array.length;i++){

// // print(array[i],i);

// // }

// array.forEach(print);


// // console.log(array);
// // for(let array1 of array){
// //     console.log(array1);
// // }


// function parameter destructuring




// const array = ["nizam","nayeem","afzal"];

// // console.log(array);

// console.log( arrays(array));

// function arrays(name){
// for(let array2 of name){
//     console.log(array2)
// }
//     return name;
// // console.log(var1,var2,var3);
// // console.log(name);



// }



// const obj={name:"nizam",age:21};

// function myFunc({name:var1,age:var2}){


// console.log(` I am ${var1} and my age is ${var2}`);

// return obj1;

// }


// var obj2 = myFunc(obj);
// console.log(obj2)




// nested parameter destructuring

// var array =[    
//     {name:"nizam",age:21},
//     {name:"nayeem",age:32}
// ]




// function myFunc([{name:var1},{age:var2}]){
// console.log(var1);
// console.log(var2);
// // for(let array2 of array1){
// //     console.log(array2.name+":"+array2.age);

// // }




// }


// myFunc(array);



// Callback function




// function myFunc2(name){

// console.log("hey are u online");
// return (name +" is good");
// }







// const myFunc = function (func2){

// console.log(func2)
// console.log(func2("nizam"));

// }


// myFunc(myFunc2);




// Returning function


// const func2 = ()=>{

//     function myFunc2(name){

//         console.log("hey are u online");
//         // return (name +" is good");
//         }
        
// // console.log(func1);
// return myFunc2;

// };

// var function1 =func2();
// function1();
// // console.log(function1)



// Array methods

// foreach method

// var array =["nizam","nayeem","afzal"];




// array.forEach(function (number,index){

//     console.log(number,index);
    
    
    
//     }
//     );


// var array =[    
//     {name:"nizam",age:21},
//     {name:"nayeem",age:32}
// ]

// array.forEach(function(elements){


// console.log(elements);
// console.log(elements.name)


// })


// Map method

// var array =[    
//     {firstName:"nizam",age:21},
//     {firstName:"nayeem",age:17},
//     {firstName:"kahaju",age:23}


// ]


// // console.log(array);


// function myFunc(objects){

// console.log(objects.firstName)

// return objects.firstName;
// }

// var array1=array.map(myFunc);
// console.log(array1);


// reduce method



// const userCart = [
//     {productId:1,product:"phone",price:10000},
//     {productId:2,product:"laptop",price:30000},
//     {productId:3,product:"tv",price:15000}
// ]

// let total = 0;
// for(let user of userCart){
//     total = total+user.price;
//     console.log(user);
// }
// console.log(total);
// function myFunc(accumlator,currentvalue){
// console.log(accumlator.price + currentvalue.price);

// }


// var total =userCart.reduce(function (accumlator,currentvalue){
//     return  accumlator + currentvalue.price;
    
//     } ,0
//     );
// console.log(total)

// map() method

// var array =  [1,2,3,4,5];


// console.log(array)

// function myFunc(number){

//     // console.log(number);
//     return number*number;
        
//     }
// myFunc(array[0])




// for(let array1 of array){

// myFunc(array1);

// }

// var array2=array.map(
//     function (number){
    
//         // console.log(number);
//         return number*number;
            
//         });
// console.log(array2);

// Filter method()


// var array =  [1,2,3,4,5];



// function isEven(num){

// return num%2===0;

// }
// function isOdd(num){

//     return num%2!==0;
    
//     }

// / var array2=array.filter(isOdd);

// // console.log(array2);


// const array = [

// {productId:1,product:"mobile",price:10000},
// {productId:2,product:"laptop",price:30000},
// {productId:3,product:"tv",price:20000}


// ]


// function myFunc(accumlator,currentvalue){
    
//     return accumlator+currentvalue.price;
// }
// var total = array.reduce(myFunc,0)
// console.log(total)/
// console.log(array)
// var total=0;

// for(let user of array){

//     total =total+user.price;
// // console.log()


// }
// console.log(total)

// var total =array.reduce(function(accumlator,currentvalue){

// return accumlator+currentvalue.price;

// },0)
// console.log(total);

// var num =+prompt("enter number")

// for(let i=0;i<=num;i++){
//     if(num%i===0){
//         alert(i)
//     }


// }

// let num =+prompt("enter number") 
// var flag=0;

// for(let i=2;i<num;i++){
// if(num%i===0){
//     flag=1;
//     break;
// }

   


// }
// if(flag===0&&num>1){
//     alert("it is prime")
// alert("not prime")
// }else{
// alert("not prime");

// }


// var presentAge = +prompt("enter the age");

// const myFunc=(Age)=>{

// var age = 100-Age;
// var days = age*365;
// var weeks = age*52;
// var months = age*12;

// alert("you have "+days+" days,"+weeks+" weeks,and "+months+" left");

// }

// myFunc(presentAge);



// function bmiCal(weight,heigth){


// var bmi = Math.floor(weight/(heigth*heigth));


// return bmi;


// }

// console.log(bmiCal(87,2.6));

// Sort Method


// var array =[5343,56,99,44];

// console.log(array)
// array.sort();
// console.log(array);

// var names = ["nizam","afzal","zara"]

// names.sort();
// console.log(names)




// const array=[2,5,499,300,1,4];

// // a-b------> positive ,b,a;
// // a-b-----> negative ,a,b
//    var lowTohigh =[...array]
   
   
   
//   lowTohigh.sort((a,b)=>{
// return a-b;

// })
// console.log(array)
// console.log(lowTohigh)




// const array = [
//     {productid:1,product:"mi8",price:14000},
//     {productid:2,product:"mi8earbuds",price:2000},
//     {productid:4,product:"mi8cover",price:200},
//     {productid:5,product:"mi8pro",price:20000},
//     {productid:6,product:"mi8promax",price:40000},
// ]



// // console.log(array)


// var newArray=[].concat(array).sort((a,b)=>{


// return a.price-b.price;


// })
// console.log(array)

// console.log(newArray)



// function myFunc(){




// const array = [
//   {product:1,product:"mobile",price:22000},
//   {product:2,product:"drier",price:220},
//   {product:3,product:"laptop",price:42000},
//   {product:4,product:"tv",price:32000},
    

// ]



// const array1=[];


// array.forEach(function(elements){


// array1.push(elements.price)


// } )
// console.log(array1)

// var array2 = array1.slice(0).sort((a,b)=>{
//     return a-b;
// })
// console.log(array2)






// }
// myFunc();



// function myFunc (number){




// return myFunc2(number);



// }


// const myFunc2 =(number)=>{
// return number*6;
// }


// var total =myFunc(8);
// console.log(total)


// var array =[22,3,7,8];


//  var array1= array.map((Number)=>{

// return Number*2;


// });
// console.log(array1)



// Filter() method


// var array =[22,3,7,8];


//  var array1= array.filter((Number)=>{

// return Number*2<44;


// });
// console.log(array1)


// Function returning


// function myFunc(){


// const myFunc2 =function(){

// console.log("iam from liet");

// }
// return myFunc2;
// }

// var myFunc3 = myFunc();
// // console.log(myFunc3)

// myFunc3();

// ---------
// var num = 18.5;
// console.log(Math.round(num))


// find() method

// const array = [1,3,6,8,4,9,5]

// function myFunc(array1){
//    var value= array1.find((num)=>num%2===0)
// return value;

// }
// var value2 = myFunc(array)
// console.log(value2)

// const array=[
    
//     {userId:1,user:"nizam",salary:100000},
//     {userId:2,user:"nayeem",salary:20000},
//     {userId:3,user:"mazin",salary:10000},
//     {userId:2,user:"afzal",salary:5000},
//     {userId:5,user:"ashraf",salary:130000}
    
// ]

// var value = array.find((user)=>user.userId===2)
// console.log(value)




// every() method

// const array=[
    
//     {userId:1,user:"nizam",salary:100000},
//     {userId:2,user:"nayeem",salary:100000},
//     {userId:3,user:"mazin",salary:100000},
//     {userId:4,user:"afzal",salary:100000},
//     {userId:5,user:"ashraf",salary:100000}
    
// ]


// var value = array.every((user)=>user.salary===100000);
// console.log(value)






// some() method

// const array=[
    
//     {userId:1,user:"nizam",salary:1000},
//     {userId:2,user:"nayeem",salary:10000},
//     {userId:3,user:"mazin",salary:100},
//     {userId:4,user:"afzal",salary:100000},
//     {userId:5,user:"ashraf",salary:10}
    
// ]

// var value = array.some((user)=>user.salary===100000);
// console.log(value)


// fill() method

// const array = [1,2,3,5,6,9]

// array.fill(0 ,2,5);
// console.log(array)


// const array1 = new Array(5).fill(4);
// console.log(array1)




// splice() method

// var array = [1,2,6,4,5];

// // array.splice(1,4);
// // console.log(array)



// array.splice(2,0,3,4,5);
// array.splice(6)
// console.log(array)




// var obj = {

// name:"nizam",
// age:21,
// height:5.6,

// }

// // console.log(obj)
// for(let obj1 in obj){
// console.log(obj1);
// // console.log(obj1+":"+obj[obj1])

// }

// console.log(Object.keys(obj));
// for(let obj2 of Object.keys(obj)){
// console.log(obj2+":"+obj[obj2])


// }

// const array = ["nizam","isaaq","nayeem","razak"];
// // console.log(array);


// var array1=array.splice(1,1,"asharf");
// console.log(array1);
// console.log(array);

// ----------------------
// const array = ["nizam","isaaq","nayeem","razak"];
// var array1 = array.slice(0).sort();
// console.log(array);
// console.log(array1);

// -----------------

// Iterables
// strings and arrays are iterables 
// objects are not are iterables


// strings are Array like Object

// -------------
// prompt("enter your name");
// prompt("enter her name");

// var num1=Math.floor(Math.random()*100+1);
// console.log(num1)
// if(num1>50){
//     alert("you both are the good lovers");
// }else{

// alert("fake lovers")

// }


// unary operators


// var name ="nizam";
// var age=name.length===5?21:22;
// console.log(age)


// const myFunc = (weight,height)=>{

// var bmi = Math.floor(weight/(height*height));

// if(bmi<18.5){
//   return "so you are underweight and "+bmi;
// }else if(bmi>18.5&&bmi<24.9){
//     return "so you have a normal weigth "+bmi
// }else{
//     return "so you are overweigth "+bmi
// }

// }


// console.log(myFunc(30,1.2));


// function myFunc(year){

// if(year%4===0&&year%100!==0){

// console.log("leap year")

// }else if(year%4===0&&year%100===0&&year%400===0){
//     console.log("leap year")
// }else{
//     console.log("not leap year")
// }


// }

// myFunc(2004);



// var array = [1,2,3,4,5,6];
// // array.fill(0,2,4);
// // console.log(array)
// array.splice(2,2,0,0);
// console.log(array)

// const array =[12,4,6,89,78,2];
// array.sort((a,b)=>{

// return a-b;

// })


// console.log(array)



// -----------------

// 1// forEach() method = doesn't returns the value ,it iterates for every elements of array,it takes the callback function
// 2// map() method = returns array with resultan values,it iterates for every elements of array,it takes the callback function
// 3// filter() method = returns array with value that satisfies the given condition ,it iterates for every elements of array,it takes the callback function
// 4// reduce() method = it returns the reduce  value of whole array into single value  but not in the form of array  ,it has two arrguments ,accumulator and currentvalue,it iterates for every elements of array,it takes the callback function
// 5// find() method = it returns the value that satisfies yhe given condition but not in the form of array and it terminates the iteration if it finds the satisfied conditioned value and does go beyond it ,it iterates for every elements of array,it takes the callback function
// 6// every() method = it returns the boolean value, if the given condition is satisfied by every array element then it returns true ,if any single element is not satisfying the condition then it returns false,it iterates for every elements of array,it takes the callback function  
// 7// some() method = it returns boolean value,it returns true if the given conditioned is satisfied by any element ,if not it returns false,it iterates for every elements of array,it takes the callback function.  
// 8// fill() method = it fills the array with the given condition value ,it  does not iterates for every elements of array,it does not take callback function .
// 9// splice() method = it is used to delete or insert element in the   middle of array


// var array = [1,2,3,6,7]
// var array = new Array(10).fill(2)
// console.log(array);
// array.fill(0,1,3);
// console.log(array)


// var array = [1,4,6,8,];

//  var array1=array.reduce((accumulator,currentvalue)=>{

// return accumulator*currentvalue;

// },1)
// console.log(array1)


// var array = ["nizam","nayeem","afzal","nazeer"];

// var name = prompt("enter the name");

// if(array.includes(name)){
//     alert("welcome to the party")
// }else{
//     alert("sorry next time")
// }


// var array =[];
// count =1;

// function myFunc(){



//  if(count%3===0&&count%5===0){
//     array.push("FizzBuzz");
//  }else if(count%3===0){
//     array.push("Fizz");
// }else if(count%5===0){
//     array.push("Buzz");
// } else{
//     array.push(count);
// }

// count++;
// console.log(array)


// }
// myFunc();
// myFunc();
// myFunc();
// myFunc();
// myFunc();
// myFunc();
// myFunc();
// myFunc();
// myFunc();
// myFunc();
// myFunc();
// myFunc();
// myFunc();
// myFunc();
// myFunc();




// var array =["nizam","nayeem","afzal"];

// function myFunc(array1){

// var array2 = array1.length;
// var array3 = Math.floor(Math.random()*array2);
// var array4 = array1[array3];

// return array4+" is going to take us to lunch"

// }

// console.log(myFunc(array));



// var random = Math.random()*8;

// console.log(Math.floor(random)+1);

// now this file is closed 
// strings="" ,numbers=1;
// variables= let, var ,const;
 // Array ,Obhectsand Function.                                      






// ******************************PRACTISE*******************************





// javaScript = js is used to add behavious to the websites


// console.log(`iam from lords institute`);
// console.log("iam from lords institute");
// console.log('iam feom lords institute');

// Variables
//  1)var


// var firstName = "nizam";
// console.log(firstName);

// firstName = "ashraf";
// console.log(firstName);

// var firstName = "name";
// console.log(firstName);

// // 2)let

// let secondName = "nayeem";
// console.log(secondName);

// secondName = "yash";
// console.log(secondName);

// // 3) const

// const thirdName ="afzal";
// console.log(thirdName);


// RULES of Variables Naming


// A variable name can be in the following forms

// // 1)
// var nameName = "raju";
// // 2)
// var name96 = "nizam";
// // 3)
// var name_ = "jass";
// var _name = "jassi";
// var first_Name = "mohd";
// // 4)
// var name$Name = "faisal";
// var $firstName = "gucci";


// STRING METHODS
// 1)String indexing
// 2)Length property
// 3)trim() method
// 4)toUpperCase() method
// 5)toLowerCase() method
// 6)slice() method
// 7)Concatinating string
// 8)string template



// 1)Sting indexing

// var first_Name = "Nizam";
// // N    i   z   a   m
// // 0    1   2   3   4
// console.log(first_Name[0]);
// console.log(first_Name[3]);


// 2)Length property

// var first_Name = "nizam";
// var length = first_Name.length;
// console.log(length);

// 3)trim() method


// var first_Name = "  nizam uddin";
// console.log(first_Name);
// console.log(first_Name.trim());


// 4)toUpperCase() method

// var first_Name = "nizam";
// var upper = first_Name.toUpperCase();
// console.log(upper);
// console.log(first_Name)


// 5)toLowerCase() method

// var first_Name ="NIZAM";
// var lower = first_Name.toLowerCase();
// console.log(lower);


// 6) slice() method

// var first_Name = "nizam";

// var slice1 = first_Name.slice(0);
//  console.log(slice1);

//  var slice2 = first_Name.slice(0,3);
//  var upper = slice2.toUpperCase();
//  console.log(upper);

//  var slice3 = upper.slice(1);
//  var lower = slice3.toLowerCase();
//  console.log(lower);


// 7) string Concatination


// var first_Name = "nizam";

// var slice1 = first_Name.slice(0,1);
// var upper = slice1.toUpperCase();
// var slice2 = first_Name.slice(1);

// console.log(upper+slice2);


// 8) string template

// var first_Name = "nizam";

// console.log("iam "+first_Name);
//         // or
// console.log(`iam ${first_Name}`);
//          // or
// console.log('iam',first_Name);



// primitive Data types of js

// 1)string
// 2)Number
// 3)boolean
// 4)undefined
// 5)null
// 6)symbol
// 7)BingInt


// 1)String type 


// var firstName ="nizam";

// console.log(typeof firstName); 
//          or
// console.log(typeof(firstName));

// CONVERTING STRING INTO NUMBER

// var firstName = "nizam";
//  firstName =  Number(firstName);
// console.log( typeof firstName);

// OR

// var first_Name ="nizam";
// first_Name= +first_Name;
// console.log(typeof first_Name)




// 2)Number type

// var age = 21;
// console.log(typeof age);
//        or
// console.log(typeof(age));

// CONVERTING NUMBER INTO STRING

// var age = 21;
// age = ""+age;
// console.log(typeof age);
 
// OR

// var age = 21;
// age = String(age);
// console.log(typeof age);




// 3)boolean type (true or false)\

// comparision operators

// 1)<,>,<=,>=
// 2)==,===
// 3)!=,!==




 // 1)<,>,<=,>=

// var age1 = 22;
// var age2 = "21";

// console.log(age1>age2);

// var num1 = 31;
// var num2 = "32";
// console.log(num1<num2);

// var num1 = 21;
// var num2 ="21";
// console.log(num1>=num2)


// var num1 = 21;
// var num2 = "20";

// console.log(num2<=num1);



// 2)==,===

// a)==

// var num1 = 22;
// var num2 = "22";
// console.log(num1==num2);

// b)===

// var num1 = 22;
// var num2 = "22";
// console.log(num1===num2);


// 3)!=,!==

// a)!=

// var num1 = 21;
// var num2 = "21";
// console.log(num1!=num2);

// b)!===

// var num1 = 21;
// var num2 = "21";
// console.log(num1!==num2)


// 4)undefined type


// var first_Name;
// console.log(typeof first_Name);



// 5)null type

// var first_Name = null;
// console.log(typeof first_Name)



// 6)BigInt type

// var num1 = BigInt(123009876412345679654);
// var num2 = 12123456789009n;
// console.log(num1+num2);



// CONDITIONAL STATEMENTS

// ternary operator
// if statement
// if else statement
// nested if else statement
// else if statement
// switch statement


// ternary operator

// var age = 21;
// var name=age>21?"afzal":"nizam";
// console.log(name)


// if statement

// var age = 21;
// var name;

// if(age!==22){
//     name = "nizam"
// }

// console.log(name)



// if else statement

// var age = 21;
// var name;

// if(age>21){
//     name = "afzal"
// }else{
//     name = "nizam"
// }
// console.log(name)


// nested if else statement

// var  num = +prompt("enter the number")

// if(num===1){
//     console.log("sunday");
// }else{

// if(num===2){
//     console.log("monday")
// }else{
//     if(num===3){
//         console.log("tuesday")
//     }else{
//        if(num==4){
//            console.log("wednesday")
//        }
//         else{
//             if(num==5){
//                 console.log("thursday")
//             }
//                 else{
//                     if(num==5){
//                         console.log("friday")
//                     }else{
//                         console.log("saturday")
//                     }
//             }   
//        }
        
//     }
// }


// }


// else if statement


// var name = prompt("enter your name")


// if(name.length>5){
//     console.log("your name length is large "+name.length)
// }else if(name.length<5){
//     console.log("your name length is samll "+name.length)
// }else{
//     console.log("your name length is normal "+name.length)
// }


// Switch statement

// var name = prompt("enter your name");
// // var length = name.length;


// switch(true){
// case (name.length>5):
//     console.log("your name length is large "+name.length);
//  break;
 
// case (name.length<5):
//     console.log("your name length is samll "+name.length);
// break;

// default:
//     console.log("your name length is normal "+name.length);

// }


// var num = +prompt("enter the number")

// switch(num){

// case 1:
// case 5:    
//     console.log("sunday")
// break;

// case 2:
//     console.log("monday")
// break;

// default:
//     console.log("saturday")

// }


// Iterative statement

// while loop
// do while loop
// for loop


// while loop

// let i = 0;
// while(i<=10){
// console.log(i);
// i++;

// }
// console.log(i);


// do while loop


// let i=10

// do{

// console.log(i);
// i++;
// }while(i<10)
// console.log(i);


// for loop

// let num =1;
// for(let i=1;i<=10;i++){
// num =num*i
//     console.log(i)
// } 
// console.log(num)





// continue and break keyword


// continue


// for(let i=0;i<=10;i++){

// if(i===4){
//     continue;
// }
// console.log(i)

// }


// break


// for(let i=0;i<=10;i++){

//     if(i===4){
//         break;
//     }
//     console.log(i)
    
//     }



// var random = Math.floor(Math.random()*6+1);
// console.log(random)



// ARRAYS 


// const array = ["nizam","nayeem","tanveer"]


// console.log(array[0])

// push()method

// array.push("afzal");
// console.log(array);

// // pop() method

// var value = array.pop();
// console.log(array);
// console.log(value);

// // unshift() method

// array.unshift("afzal","ashraf");
// console.log(array);


// // shift() method

// var value2 = array.shift();
// console.log(array);
// console.log(value2);

// console.log(Array.isArray(array));


// ReferenceType


// const array = ["nizam","nayeem","tanveer"]
// const array1= array;
// console.log(array1)

// array.push("nizam");
// console.log(array)
// console.log(array1)



// Cloning of Array

// slicing
// const array = ["nizam","nayeem","tanveer"]
// const array1 = array.slice(0);
// console.log(array1)
//  array.push("nizam");
// console.log(array)

// concat 

// const array = ["nizam","nayeem","tanveer"]

// const array1 = [].concat(array,"ashraf");
// console.log(array1)


// spread


// const array = ["nizam","nayeem","tanveer"]

// const array1 = [...array,"rahul"];
// console.log(array1);


// Iteration

// forloop

// const array = ["nizam","nayeem","tanveer"]

// for(let i=0;i<array.length;i++){

// console.log(array[i]);

// }


// forinloop

// const array = ["nizam","nayeem","tanveer"]
// const array2 = [];
// for(let array1 in array){
// array2.push(array[array1]);
// }

// console.log(array2);


// forofloop

// const array = ["nizam","nayeem","tanveer"]

// for(let array1 of array){
//     console.log(array1);
// }




//Array destructring

// const array = ["nizam","nayeem","tanveer"]

// let [var1,var2,...var3]=array;
// console.log(var1)
// console.log(var3);



// Nested destructuring


// const array = [
// {name:"nizam",age:21,salary:334},
// {name:"nayeem",age:22,salary:600},
// {name:"nayeem",age:23,salary:500}
// ]


// let [{name,age:var4},var2,...var3] = array;
// // console.log(var1);
// // console.log(var3);

// console.log(name);
// console.log(var4);




// OBJECTS

// const obj = {

// name:"nizam",
// age:21,
// hobbies:["swimming","prayer"]

// }

// console.log(obj)

// console.log(obj.name);
// console.log(obj["hobbies"]);

// var num = obj["hobbies"];
// num.push("running");
// console.log(num)

// obj["hobbies"].push("running");
// console.log(obj["hobbies"]);

// var key = "email";
// var value = "uddinmdnizam61@gmail.com"

// const obj = {

//     name:"nizam",
//     age:21,
//     hobbies:["swimming","prayer"]
    
//     }


// obj.name="afzal";
// console.log(obj.name);

// obj["work"]="developer"
// console.log(obj.work)

// obj[key]=value;
// console.log(obj.email);


// ITERATIONS


// forinloop


// const obj = {

//     name:"nizam",
//     age:21,
//     hobbies:["swimming","prayer"]
    
//     }


//     for(let obj1 in obj){

//         console.log(obj1+":"+obj[obj1]);
    
//     }
// console.log(Object.keys(obj))

// for(let obj2 of Object.keys(obj)){

//     console.log(obj2+":"+obj[obj2]);
// }

// cloning of objects

// const obj = {

//     name:"nizam",
//     age:21,
//     hobbies:["swimming","prayer"]
    
// }
// const obj3 = {..."nizam"};

// const obj2 = {...obj,...obj3};
// console.log(obj3)
// console.log(obj2);




// Computed properties

// var key1 = "email";
// var value1= "uddinmdnizam61@gmail.com";

// var key2 = "phone No";
// var value2 = 9491589319;

// const obj={
// [key1]:value1,
// [key2]:value2


// }
// console.log(obj);

// objects destructuring


// const obj = {

//     name:"nizam",
//     age:21,
//     hobbies:["swimming","prayer"]
    
//     }



//   let { name:var1,age,...var2}= obj;
// //   console.log(name);
// //   console.log(var2)  

// console.log(var1);

// FUNCTIONS

// function declaration


// function myFunc(){

// console.log("nizam uddin")

// }

// myFunc();


// function expression


// const myFunc = function(name,clg){

// console.log(`iam ${name} from ${clg}`)

// }


// myFunc("nizam","liet");



// Arrow function


// const myFunc = (num1,num2)=>{

// return num1+num2;


// }

// var total = myFunc(2,3);
// console.log(total);

// const array = [1,3,6,7];

// const array2 = [];

//  const myFunc = (array1)=>{

// for(let array3 of array1){
//     array2.push(array3);
// }

//  }

// myFunc(array);
// console.log(array2)

// const array = []
// count = 1;
// const myFunc = ()=>{


// if(count%3===0&&count%5===0){
//     array.push("FizzBuzz")
// }
// else if(count%3===0){
// array.push("Fizz");

// }else if(count%5===0){
//     array.push("Buzz")
// }else{
//     array.push(count);
// }

// count++;

// }


// myFunc();
// myFunc();
// myFunc();

// console.log(array);

// const obj = {

// name:"nizam",
// age:21,
// address:"ring road"



// }
// function myFunc(obj2){

// return obj2.name;


// }

// console.log(myFunc(obj));



// Nested Functions

// function myFunc(){

// console.log("iam calling all other functions right now")
// const myFunc2 = (num1,num2)=>num1+num2;

// const myFunc3 = (num)=>{

// return num*2;

// }
// console.log(myFunc3(3));
// return myFunc2(3,5);

// }

// console.log(myFunc());


// hoisting function 

// myFunc();
// function myFunc(){
// console.log("md nizam")
// }


// Default parameter


// function myFunc(a,b=0){

// return a+b;

// }

// console.log(myFunc(2,))



// Rest parameter

// const myFunc = (a,b,...c)=>{
// var d = 0;
// for(let e of c ){
// d=d+e;
// }

// return a+b+d;

// }
// console.log(myFunc(2,3,5,7));



// parameter destructuring

// const obj = {
//     name:"nizam",
//     age:21,
//     work:"developer"
// }


// function myFunc({name,age}){

// console.log(name)


// }

// myFunc(obj)


// const array = ["nizam","nayeem","afzal"]



// function myFunc([var1,var2]){

//     console.log(var1)
    
    
// }
    
//  myFunc(array)




// Callback function


// const func1 = (num1,num2)=>{

// return num1+num2

// }

// const func2 = (func3)=>{

//     return func3(2,4);
// // console.log(func3)

// }

// console.log(func2(func1));



// Returning function

// function myFunc(){

// const myFunc2 = ()=>{
// console.log("nizam uddin")
// }
// return myFunc2;

// }

// var myfunc3 = myFunc();
// myfunc3();


// important Array methods with function

// forEach() method

// var array = [1,4,6,8,5];


// array.forEach(function (num){

//     num1 =num*2;
//     console.log(num1);
    
//     }
//     );



// Map() method

// var array = [1,4,6,8,5];

// var array1 = array.map(function (num){

//     num1 =num*2;
//     return num1;
    
//     }
//     );

// console.log(array1);



// filter() method

// var array = [1,4,6,8,5];


//  var array1 =array.filter(function (num){

// return num%2===0;    
//     }
//     );

// console.log(array1)




// reduce() method

// var array = [1,4,6,8,5];

//  var array1 =array.reduce(function (num,currentvalue){

// return num+currentvalue;    
//     },0
//     );

// console.log(array1)




// Find() method

// var array = [1,4,6,8,5];


//  var array1 =array.find(function (num){

// return num%2===0;    
//     }
//     );

// console.log(array1)



// every() method

// var array = [1,4,6,8,5];


//  var array1 =array.every(function (num){

// return num%2===0;    
//     }
//     );

// console.log(array1)



// some() method

// var array = [1,4,6,8,5];


//  var array1 =array.some(function (num){

// return num%2===0;    
//     }
//     );

// console.log(array1)


// fill() method

// var array = new Array(6).fill(3);
// console.log(array);

// array.fill(1,0,1);
// array.fill(2,1,2);

// console.log(array)



// splice() method

// var array = [1,4,6,7,8]

// // var array1 = array.slice(0).splice(1,3);
// // // console.log(array);
// // console.log(array1);

// array.splice(2,2,1,3,4);
// console.log(array);

// Sort() method

// var array = [1,4,6,8,2,];

// array.sort(function (a,b){

//     return a-b;

// });
// console.log(array);



// const array = [];
// function myfunc3(num){


// let i=1;
//     while(i<num){

        
// if(i%3===0&&i%5===0){
//     array.push("FizzBuzz")
// }
// else if(i%3===0){
// array.push("Fizz");

// }else if(i%5===0){
//     array.push("Buzz")
// }else{
//     array.push(i);
// }
// i++;
//     }
// console.log(array)

// }


// myfunc3(100);




// function myFunc(){


// let i=99;
// var wordbottle ="bottles";
// while(i<100&&i!=0){
// if(i===1){
// wordbottle = "bottle";
// }
// console.log(i + wordbottle+" of beer on the wall ,"+ i + wordbottle+ "of beer");
// console.log("Take one down asnd pass it round "+ i + wordbottle +" of beer on the wall" );


// i--;
// }

// console.log("No more bottles of beer on the wall,No more bottles of beer");
// console.log("Go to the store and by some more,99 botlles beer on the wall");



// }
// myFunc();


// function febonaccinum(n){
// // var output = [];
// if(n===1){

// return [0];
// }else if(n===2){
// return [0,1];
// }else{
// var output=[0,1];

//     for(let i=2;i<n;i++){

//      output.push(output[output.length-2]+output[output.length-1])
   
// }
//     return output;
// }

// }

// var number = febonaccinum(20);
// console.log(number);




// var array = [2,7,8,9,34];
// var array2=[...array].fill(0);
// console.log(array);
// console.log(array2)




// set() method
// const obj = {
//     name:"nziam"
// }
// var array =["nizam","nayeem","yousuf"];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(3);
// numbers.add(2);
// numbers.add(obj);
// // // console.log(obj)
// // numbers.add(array);
// // // console.log(numbers.has(array))
// // console.log(numbers);
// var length = 0;
// for(let num of numbers){
//     // console.log(num);
//     length++;
// }
// console.log(length)
// // let {var1,var2}=numbers;
// // console.log(var1)

// var array = [1,2,4,6,2,4,6,7];


// var num = new Set([1,2,4,6,2,4,6,7]);

// console.log(num)

// var num = new Set();
// num.add([1,2,3,6]);

// console.log(num);




// map data structure


// const obj ={
//     firstname:'nayeem',
//     age:17
// }

// var num = new Map([['tanveer','motu',]]);
// num.set(obj,{gender:'male'});
// num.set('name','nizam');

// num.set({age:21},2);

// num.set({name:"nizam"},"nizam");

// console.log( num.get(obj).gender)

// console.log( typeof num.get(obj));

// console.log(num);

// console.log( typeof num.keys())
// for(let num1 of num.keys()){
//     console.log(num1+":"+num.get(num1))
// }
// for(let [var1,var2] of num){
    
//     console.log( var1+":"+var2);

// }


// var obj = {
//     name:"nizam",
//     // age:{age:21},
// }


// var obj2 = Object.assign({}, obj);

// obj.key="value"
// console.log(obj)
// console.log(obj2)
// console.log(obj?.age?.age)


// methods
// function inside the object
// function callback(){
//     return (`iam ${this.name} a developer`)
// }

// var obj1 = {
//     name:"nizam",
//     age:21,
//     about: callback,
// }

// var obj2 = {
//     name:"ashraf",
//     age:22,
//     about: callback,
// }

// var obj3 = {
//     name:"nayeem",
//     age:17,
//     about: callback,
// }

// console.log(obj3.about());

// function myfunc2(){
//     console.log("hii everyone")
// }

// function myFunc(){

// return myfunc2;

// }

// // console.log(myFunc());
// var func3 = myFunc();
// func3();

// map data strucuture




// var mapping  = new Map([["nizam","name"]]);
// mapping.set({name:"nizam"},'lords')
// mapping.set("age",21)
// console.log(mapping);
// console.log(mapping.get({name:"nizam"}))
// console.log(mapping.keys());
// for(let mapped of mapping.keys()){
//     console.log(mapped)
// }
// for(let map of mapping){
//     console.log(map)
// }



// Set() method

// var obj = {
//     name:"nizam",
//     age:21,
// }
// var array = [1,2,3,4]
// var set = new Set([1,3,5,2,8]);
// set.add(5);
// set.add(array);
// // console.log(set)
// console.log(set.keys())
// console.log(set)
// var boolean = set.has(array);
// console.log(boolean)
// for(let set1 of set){
    
//     console.log(set1);
// }


// cloning of object in by differebnt method

// const obj = {
//     // names:{firstName:"nizam",lastName:"uddin"},
//     age:21,
// }

// // const obj1 ={...obj};
// const obj1 = Object.assign({} ,obj);
// console.log(obj1)

// console.log(obj?.names?.firstName);

// method in object
// var obj = {
//     name:"nizam",
//     age:21,
//     about:function(){
//         console.log("iam "+ this.name+" from india")
//     }
// } 
// // console.log(obj.about)
// obj.about();

// function myFunc(){
// console.log(this)}
// myFunc();

// function myfunc(num1,num2){
//     console.log(this)
//     console.log("iam "+ this.name+" from india and my age is "+(num1+num2))
//         }

//         var obj = {
//                 name:"nizam",
//                 age:21,
//             // about:myfunc,
//             }
//             var obj1 = {
//                 name:"mazin",
//                 age:20,
//             // about:myfunc,
//             } 
//              var obj2 = {
//                 name:"raheem",
//                 age:19,
//             // about:myfunc
//             } 
//              var obj3 = {
//                 name:"rahman",
//                 age:15,
//             // about:myfunc,
            // }
            // obj1.about();
// myfunc.call(obj1,6,9)
// var func =myfunc;
// console.log(func)
    // myfunc.call(obj1,10,11);





// var obj ={

//     name:"nizam",
//     age:21,
//     about:function(){
//         console.log("iam "+ this.name+" from india")

//     }
// }

// var obj1 ={

//     name:"mazin",
//     age:20,
//     about:function(){
//         console.log("iam "+ this.name+" from india")

//     }
// }
// // console.log(obj);
// // console.log(obj.about)
// var myfunc = obj.about.bind(obj1);

// myfunc();



// var obj1 ={

//     name:"mazin",
//     age:20,
//     about:()=>{
//     //    console.log(this)
//         console.log("iam "+ this.name+" from india")

//     }
// }

// obj1.about();
// function myfunc1(){
//     console.log('iam '+this.firstName);
// }

// function myFunc(firstName,age,address){

// const obj={};

// obj.firstName = firstName;
// obj.age = age;
// obj.address = address;
// // obj.about = function(){
// //     return 'iam '+this.firstName;
// // }
// return obj;





// }

// var user1 =myFunc("nizam",21,"ring road");
// var user2 = myFunc("nayeem",17,"attapur");
// console.log(user2.firstName)
// console.log(user1.about());
// var user1 = myFunc("nizam",21,"attapur");
// console.log(user1);
// var user2 = myFunc("mazin",22,"tolichowki");

// var myfunc2=myfunc1.call(user2);
// console.log(myfunc2)

// var user1 = myFunc("nizam",21,"attapur");
// var myfunc = myfunc1.bind(user1);
// myfunc();



// function myFunc(){

// var set = new Set();
// set.add({name:"nizam",
// age:21});
// set.add([1,3,5,7]);
// set.add("nayeem")

// return set;




// }

// var newSet = myFunc();
// // console.log(newSet)
// // var boolean = newSet.has();
// // console.log(boolean)
// // console.log(newSet.keys());\

// for(let set1 of newSet){
//     console.log(set1)
// }


// callback function 

// function myFunc(){
//  return ("iam from hyd")
// }


// const myfunc1 =(myFunc2)=>{

// var func = myFunc2();

// return func;

// }

//  var myfunc3 = myfunc1(myFunc);

//  console.log(myfunc3)


// var map = new Map([['age',21],['address','attapur']]);
// map.set('name','nizam')
// map.set({name:'nizam'},'nizam')

// console.log(map);

// console.log(map.keys())

// console.log(map.get());

// for(let [map1,map2] of map){
//     console.log(map1+":"+map2)
// }
// function about(){
//     console.log("hii iam "+ this.name)
// }

// const obj = {
// name:"nizam",
// age:21,

// }
// var func = about.bind(obj);
// func();

// function myfunc2(){
//  const obj2 ={
//      about1:function(){
//          return 'iam '+this.firstName;
//      }
//  } 
//  return obj2;  
// }

// function myFunc(firstName,age,address){


// const obj = {};


// obj.firstName = firstName;
// obj.age = age;
// obj.address = address;
// var obj3 = myfunc2();
// obj.about = obj3.about1;
// // obj.about = function(){
// //     return 'iam '+this.firstName;
// // }
// // obj.is18=function(){
// //     return this.age>18;
// // }
// // console.log(obj)
// return obj;



// }
// var user1 =myFunc("nizam",21,"attapur");
// console.log(user1.about());
// var user2 = myFunc("mazin",19,"tolichowki");

// var func = user2.about;
// console.log(func.call(user2));
 

// __proto__


// const obj1 ={
//     about:function(){
//         return 'iam '+this.firstName;
//     },
//     is18:function (){
//         return age>18;
//     }
// }

// function myFunc(firstName,age){


// const obj=Object.create(obj1);
// obj.firstName=firstName;
// obj.age=age;

// return obj;
// }

// var user = myFunc("nizam",21);
// // console.log(user.about())
// var user1 =user.about;

// console.log(user1.call(user))

// prototype


// function myFunc(firstName,age){


//     const obj=Object.create(myFunc.prototype);
//     obj.firstName=firstName;
//     obj.age=age;

    
//     return obj;
//     }

//     myFunc.prototype.about=function(){
//         return 'iam '+this.firstName;
//     }
    
//     myFunc.prototype.is18=function(){
//         return age>18;
//     }
//     // console.log(myFunc.prototype)

// var user1 = myFunc("nizam",21);
// console.log(user1.about())
// //    console.log(myFunc("nizam",21))


// const obj1 = {
//     about:function(){
//         return ("iam "+this.firstName)
//     },
//     is18:function(){
//         return (this.age>18)
//     }
// }

// function myFunc(firstName,age){


// const obj = Object.create(obj1);
// obj.firstName = firstName;
// obj.age= age;
// // obj.about=obj1.about;

// return obj;

// }
// // console.log(myFunc("nizam",21))
// var user1 = myFunc("nizam",21);
// console.log(user1)
// // console.log(user1.about())
// var name =user1.about();
// console.log(name);
//  var age =user1.is18();
// console.log(age);



// function myFunc(firstName,age){


// const obj = Object.create(myFunc.prototype);
// obj.firstName = firstName;
// obj.age= age;
// // obj.about=obj1.about;

// return obj;

// }


// myFunc.prototype.about = function(){
//     return 'iam '+this.firstName
// }
// myFunc.prototype.is18 = function(){
//     return this.age>18;
// }

// var user1 = myFunc("nizam",12);
// console.log(user1);
// var name = user1.about();
// console.log(name)
// console.log(user1.is18());


// CLASS 


// class Animal{

// constructor(name,age){
//     this.name=name;
//     this.age = age;

// }
// get eat(){
//     console.log("eat the food")
// }
// setter(name,age){
// this.name=name;
// this.age=age;
// }


// }

// var func =  new Animal("sheru",5);
// console.log(func);
// console.log(func.name);
// func.eat;
// func.setter("kutti",4);
// console.log(func.name);
// console.log(func)





// class dog extends Animal{
// constructor(name,age,speed){
//     super(name,age);
//     this.speed=speed;
// }


// }

// // console.log(new dog("tommy",3,45))
// const obj = new dog("tommy",2,45);
// console.log(obj);
// console.log(obj.name);
// obj.name="ramy";



// function myFunc(num1,num2){
//     return this.firstName+ " "+(num1+num2);
// }

// const obj = {
// firstName:"nizam",
// age:21
    
// }


// var total = myFunc.bind(obj,1,3);
// console.log(total());

//  const obj1 = {
//      about(){
//          return this.firstName;

//      }
//  }

// function myFunc(firstName,age){
// var obj = Object.create(obj1);
// obj.firstName=firstName;
// obj.age=age;

// return obj
// }

// console.log(myFunc.prototype)

// var obj2 = myFunc("nizam",11);
// console.log(obj2.about());
// class UserDetail{
//    constructor(first, last, age, eyecolor) {
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.eyeColor = eyecolor;
//       }
// get  about(){
//            return this.firstName+this.lastName;
//       }
      
// }


//   var obj = new UserDetail("nizam","uddin",21,"brown");
//   console.log(obj);
//     console.log(obj.about)




// FUNCTIONS


// function declaration

// function myfunc(){
//   console.log("nizam uddin")
// }

// myfunc();


// return


// function myfunc(){
//   return ("nizam uddin")
// }

// var value = myfunc();
// console.log(value);


// function expression

// const myFunc = function(num1,num2){
//   return num1+num2
// }

// var value = myFunc(2,3)
// console.log(value);



// arrow function

// const myFunc = (num1,num2)=>{
//   return num1+num2
// }

// var value = myFunc(2,3)
// console.log(value);


// const myfunc = (num)=>{


// if(num===1){
//   return [0];
// }else if(num===2){
//   return[0,1];
// }else{
//   var output = [0,1]

//   for(let i=2;i<num;i++)
// output.push(output[output.length-2]+output[output.length-1])
// }
// return output;
// }
// console.log(myfunc(9))
 



// nested function

// function myFunc()
// {

// const myFunc1 = ()=>{
//     console.log("iam from hyderabad")
// }

// const myFunc2 =function(num1,num2){
//     return (num1+num2)
// }

// myFunc1();
// var value = myFunc2(3,5);
// console.log(value);

// return 
// }
// myFunc();



// hoisting funnction 

// hello();
// function hello(){
//     console.log("iam nizam")
// }



// default parametere


// const myFunc = (a,b=0)=>{
//     return a+b
// }

// var value = myFunc(2,)
// console.log(value)


// rest parameter


// const myFunc = (a,b,...c)=>{
// value2 = 0;
//     for(var value1 of c){
//     value2 = value2+value1;
// }
//     return a+b+value2
// }

// var value = myFunc(2,2,3,5,67,8)
// console.log(value)



// parameter destructuring

// var Array = [1,3,5,78]
// function myFunc([var1,var2,...var3]){

// console.log(var1);
// console.log(var2)
// console.log(var3)


// }

// myFunc(Array);


// var object  = {
//     name:"nizam",
//     age:21
// }
// function myFunc({name:var1,...var3}){

// console.log(var1);
// console.log(var2);
// console.log(var3);


// }

// myFunc(object);




// callback function

// function  myFunc(){

// console.log("iam developer")

// }


// function myFunc1(myFunc3){
// myFunc3();

// }
// myFunc1(myFunc);


// function returning

// function  myFunc(){

//     console.log("iam developer")
    
//     }
    
    
//     function myFunc1(myFunc3){
//     return myFunc3;
    
//     }
//     var func = myFunc1(myFunc);
//     func();

// forEach() method

// var array = [1,2,5,7,8]

// array.forEach((a,b) => {
// var num = 0;
// if(b<array.length){
//     num = num+a;
// }
// console.log(num)
// });



// Map()method

// var array = [1,2,5,7,8]


// var value = array.map(function(num){
//     return num*num;
// })
// console.log(value)


// filter() method

// var array = [1,2,5,7,8]

// var isEven = array.filter((num)=>{
//     return  num%2!==0;
// })
// console.log(isEven)


// reduce method

// var array = [1,2,5,7,8]


// var value = array.reduce((accumulator,currentvalue)=>{
//     return accumulator + currentvalue;
// },0)
// console.log(value)



// find() method

// var array = [1,2,5,7,8]

// var isEven = array.find((num)=>{
//     return  num%2!==0;
// })
// console.log(isEven)


// every() method


// var array = [1,2,5,7,8]

// var isEven = array.every((num)=>{
//     return  num%2!==0;
// })
// console.log(isEven)


// some() method

// var array = [1,2,5,7,8]

// var isEven = array.some((num)=>{
//     return  num%2!==0;
// })
// console.log(isEven)


// fill() method


// var array = [1,2,5,7,8]

// array.fill(0,1,5);
// console.log(array)

// var array1 = new Array(2).fill(4);
// console.log(array1);


// splice() method



// var array = [1,2,5,7,8]


// array.splice(2,2,3);
// console.log(array);

// array.splice(2,3);
// console.log(array);


// sort() method

// var array = [1,3,0,2,8]

// const array1 = [...array].sort((a,b)=>{
// return a-b;
// })
// console.log(array1);


// set() method

// var array = [1,2,4,2,1,5,7,]

// var set1 = new Set([1,3,4]);

// set1.add("nizam");
// set1.add(array);
// console.log(set1)


// console.log(set1.keys());

// console.log(set1.has(4));

// set1.delete(array);

// console.log(set1)


// for(let set2 of set1 ){
//     console.log(set2)
// }


// Map data structure

// var map1 = new Map([['name','nizam'],['age',21]]);

// map1.set({name:"nayeem"},'ashraf');

// console.log(map1.get('name'));

// console.log(map1)
// console.log(map1.keys())

// for(let key of map1.keys()){
//     console.log( key+":"+map1.get(key))
// }


// for(let [var1,var2] of map1){
//     console.log(var1 +":"+var2);
// }


// method 


// const obj1 ={
//     name:"nizam",
//     age:21,
//     about :function (){
//         console.log(this.name)
//     }
// } 

// obj1.about();



// call() method 

// function about(){
//     console.log(this.name)
// }
// const obj1 ={
//     name:"nizam",
//     age:21,
    
// } 
// const obj2 ={
//     name:"azam",
//     age:21,
    
// }
//  const obj3 ={
//     name:"raheen",
//     age:21,
    
// } 
// const obj4 ={
//     name:"ashraf",
//     age:21,
    
// } 

// about.call(obj4);


// apply() method 


// function about(num1){
// return (this.name + " " +num1*2)
// }
// const obj1 ={
//     name:"nizam",
//     age:21,
    
// } 
// const obj2 ={
//     name:"azam",
//     age:21,
    
// }
//  const obj3 ={
//     name:"raheen",
//     age:21,
    
// } 
// const obj4 ={
//     name:"ashraf",
//     age:21,
    
// } 
//  var value = about.apply(obj1,[4])
//  console.log(value)



// bind() method



// function about(){
//     console.log(this.name)
// }
// const obj1 ={
//     name:"nizam",
//     age:21,
    
// } 
// const obj2 ={
//     name:"azam",
//     age:21,
    
// }
//  const obj3 ={
//     name:"raheen",
//     age:21,
    
// } 
// const obj4 ={
//     name:"ashraf",
//     age:21,
    
// } 
// var user1 = about.bind(obj2);
// user1();




// __proto__



// const obj2 = {
// about:function (){
//     return this.firstName}
// }

// function myFunc(firstName,age,about){

// const obj = Object.create(obj2);
// obj.firstName=firstName;
// obj.age = age;


// return obj

// }
//   var user1 = myFunc("nizam",21)
// console.log(user1);
// console.log(user1.about())



// prototype



    // function myFunc(firstName,age){
    
    // const obj = Object.create(myFunc.prototype);
    // obj.firstName=firstName;
    // obj.age = age;
    
    
    // return obj
    
    // }


    // myFunc.prototype.about= function (){
    //     return this.firstName}
       
    //   var user1 = myFunc("nizam",21)
    // console.log(user1);
    // console.log(user1.about())





    // new keyword

    
    // function myFunc(firstName,age){
    
    // this.firstName=firstName;
    // this.age = age;
    
    // }


    // myFunc.prototype.about= function (){
    //     return this.firstName}
       
    //   var user1 = new myFunc("nizam",21)
    // console.log(user1);
    // console.log(user1.about())



    // class


// class CreateUser{

//  constructor(firstName,age){
    
//         this.firstName=firstName;
//         this.age = age;
        
//         }
    
    
//      get about(){
//             return this.firstName}
           
   
// }
        
// var user1 = new CreateUser("nizam",21)
// console.log(user1);
// console.log(user1.about)


// super and extend keyeord


// class CreateUser{

//  constructor(firstName,age){
    
//         this.firstName=firstName;
//         this.age = age;
        
//         }
    
    
//      get about(){
//             return this.firstName}
           
   
// }


// class Dog extends CreateUser{
// constructor(firstName,age,speed){
//     super(firstName,age);
//     this.speed=speed;
// }

// }

// const dog =new  Dog("tommy",2,25+"kph");
// console.log(dog.speed);
// console.log(dog.about)


