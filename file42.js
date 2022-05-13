// console.log("iam from lords");
// console.log(`iam from cse`);
// console.log('iam from cse');


// // variables
// var firstName = "nizam";
// console.log("iam " + firstName);
// firstName= "nayeem";
// console.log(`iam ${firstName}`);
// firstName= 786;
// console.log("iam",firstName);

// // let variables
// let age= 21;
// console.log(age);
// age = 25;
// console.log(`your age is ${age}`);
// let last_name= "uddin";
// console.log(last_name);
// let $firstName = "rahul";
// console.log($firstName)
// var school$Name = "dbhs";
// console.log("your school is "+school$Name);
// var name123 = "azhar";
// console.log(name123);

// const name = "nizam";
// // name = "nayeem";
// console.log(name);


// // string indexing properties

// var _Name = "nizam uddin";
// console.log(_Name[6]);

// // .length property

// var name_= "nomaan";

// var length = name_.length;
// console.log(length);

// // .trim() property

// var name1 = "  nizam";
// console.log(name1);
// var trim = name1.trim();
// console.log(trim);
// console.log(trim.length);


// // .slice() property

// var firstName1 =  "ashraf";
// var slicing = firstName1.slice(0);
// console.log(slicing);
// slicing = firstName1.slice(1,6);
// console.log(slicing);


// // .toUpperCase() and .toLoweCase()

// let name2 = "pasha";
// var slice1 = name2.slice(0,1);
// var upper = slice1.toUpperCase();

// var slice = name2.slice(1,5);

// console.log(upper + slice);

// let name3 = "PASHA";

// let slici1 = name3.slice(0,5);
// let lower = slici1.toLowerCase();
// console.log(lower);



// Data Types

// primitive types
// String
// numbers
// boolean
// flloat
// var string = "nizam";
// console.log(string[0]);
// var age = 21;
// // coverting number into string
// age  = ""+age;
// console.log( typeof(age));

// var number = 568;
// number = String(number);
// console.log(typeof number);

// // converting string into number 

// string = Number(string);
// console.log(typeof string);

// var nameName = "nizam";
// console.log(typeof nameName);
// nameName = +nameName;
// console.log( typeof nameName);

// var firstNum = BigInt(1234567891234567);
// var secondNum = 1234567891234567n;

// console.log(firstNum+secondNum)
// var secondNum;
// console.log(typeof secondNum)
// var firstName = null;
// console.log(typeof firstName)

// boolean types

// var num1 = 2;
// var num2 = 3;
// console.log(num1>num2);
// console.log(num2>num1);

// comparision operators
 
// == ||=== 

// var num1 = 2;
// var num2 = "2";
// console.log(num1==num2);
// console.log(num1 === num2);
//  console.log(num1>=num2);


// var num1 = 3;
// var num2 = "6";

// console.log(num1!=num2);
// console.log(num1!==num2);

// ternary operator
// var num = 2;
// var name;
// if(num>2){
//     name="nziam"
// }
// else{
//     name="nayeem"
// }
// console.log(name);


// by ternary opertaor

// var name =num>2?"nizam":"afzal"
// console.log(name);


// && and || operator
// var num1 = "string";
// if(num1.slice(0,1)=="s"&&num1==="string"){
//     console.log(num1);
// }else{
//     console.log("its is number type");
// }

// var num1 = "tring";

// if(num1.slice(0,1)==="s"||num1==="tring"){
//         console.log(typeof num1);
//     }else{
//         console.log("its is number type");
//     }
    
    

// conditional statements

// if statement
// var num1 = 2;
// if(num1>="1"){
//     console.log(num1)
// }

// ifelse

// var num2 = +prompt("entered the number");

// console.log(typeof num2);

// if(num2 <= 55){
//     console.log("you have entered rigth digit")
// }
// else{
//     console.log("your number is rigth");
// }




// nested ifelse

// var guessNum= 25;
// var num = +prompt("enter the number");
// if(num === guessNum){
// console.log("u won")

// }else{
// if(num>guessNum){
//     console.log("u are high");
// }else{

// console.log("u are clase");

    
// }

// }




// // elseif sattement

// var num =+prompt('enter the number');

// if(num===1){
// console.log("sunday");
// }
// else if(num===2){
//     console.log("monday");
// }
// else if(num ===3){
//     console.log("tuesday");
// }
// else if(num===4){
//     console.log("wednesday");
// }
// else if(num===5){
//     console.log("thursday")
// }
// else if(num===6){
//     console.log("friday")
// }
// else if(num===4){
//     console.log("saturday")
// }
// else{
//     console.log("no more days")
// }


// switch statemnt

// var num = prompt("enter your alphabet")

// switch(num){

// case "w":
//     console.log("its working");
//     break;
//   case "y":
//       console.log("its also working")   
//     break;

//     case "z":
//         console.log("its not working");
//         break;

//       case "w":
//           console.log("bcjhjkd");
//           break;

//        default:
//            console.log("invalid"); 



// }



// itirable statements


// While statement

// var num = 10;
//  let i = 0;
// while(i<=num){
    
//     console.log(i);
// i++;

// }
// console.log(i);

// forloop

// var num =0;

// for(var i=0;i<=10;i++)
// {
// num =num+i;
// // console.log(num);

// };
// console.log(num);
// console.log(i)


// doWhileloop

// let i =0;
// let num =0;
// do{
//     num =num+i;
//     console.log(i);
//     i++;
// }while(i<=10);

// console.log(num);
// console.log(i)


// continue keyword


// for(let i = 0;i<=7;i++){
// if(i===4){
//     break;
// }
// console.log(i)

// }

// Break keyword

// for(let i = 0;i<=7;i++){
// if(i===4){
//     continue;
// }
// console.log(i)

// }

// var num=0;
// for(let i=0;i<=10;i++)
// {
//     var flag =0;
// for(var j=2;j<i;j++)
// {
//     if(i%j===0){
//         flag=1;
//         break;
//     }
// }

// if(flag===0&&i>1){
//     console.log(i);
// num =num +i;
// }


// }
// console.log(num);



// var num = +prompt("enter the number")

// var flag=0;

// for(var i=2;i<num;i++){
   
//     if(num%i===0){
//     flag =1;
//     break;

// }


// }

// if(flag===0&&num>1){
//     alert("it is prime");
// }else{
// alert("it is not prime")

// }


// Arrays


// const array1 = ["apple","mango","grapes",];
// console.log(array1);

// array1[2]="orange";
// console.log(array1);
// console.log(array1[1]+","+array1[2]);

// console.log(Array.isArray(array1));
// console.log(typeof array1);

// var length = array1.length;
// console.log(length);

// console.log(array1[array1.length-1].toUpperCase());

// var slice = array1.slice(array1.length-3);
// console.log(slice)


// Push and Pop 

// const array1=["apple","mango","banana"];

// console.log(array1);

// array1.push("orange","nizam");
// console.log(array1);
// var pop =array1.pop();
// console.log(array1);
// console.log(pop);

// const array2 = [];
// var push = array2.push(array1.pop());
// console.log(array2);



// Unshift and Shift



// const array1 = ["apple","mango","grapes"];
// var unshift = array1.unshift("banana","orange",);
// console.log(array1);

// var shift = array1.shift();
// console.log(array1);

// console.log(shift);



// while loop in Array

// const array1 = ["nizam","nayeem","ashraf","afzal"];

// let i = 0;

// var array2 = [];
// while (i<array1.length) {
//     console.log(array1[i]);
// array2.push(array1[i]);

//     i++;
// }
// console.log(array2)



// forLoop

// const array1 = ["nizam","nayeem","ashraf","afzal"];
// const array2 = [];
// for(let i=0;i<array1.length;i++){

// console.log(array1[i]);
// array2.push(array1[i]);
// }

// console.log(array2)


// doWhileloop

// const array1 = ["nizam","nayeem","ashraf","afzal"];
// let i = 0;
// const array2= [];
// do {
//     console.log(array1[i]);
//     array2.push(array1[i]);
//     i++;
// } while (i<array1.length);
// console.log(array2);




// for of loop


// const array1 = ["nizam","nayeem","ashraf","afzal"];
// const array2 = [];
// for(let array of array1){
// console.log(array);

// array2.push(array);


// }

// console.log(array2);


// for in loop

// const array1 = ["nizam","nayeem","ashraf","afzal"];

// const array2 = [];

// for(let array in array1){
// // console.log(array)
// console.log(array1[array])
// array2.push(array1[array]);
// }

// console.log(array2);


// Cloning of Array

// const array1 = ["nizam","nayeem","ashraf","afzal"];

// const array2 = [array1[0],array1[1]];
// const array2 = array1.slice(0).concat(["array","array2"]);
// console.log(array2);

// const array2 = [].concat(array1,["zara"]);
// console.log(array2)

// const array2=[...array1,"zara","aliya"];
// console.log(array2);

// const array = [..."123"];
// console.log(array)


// destructuring array


// const array1 = ["nizam","nayeem","ashraf","afzal"];

// let [var1,,var2,...array]= array1;

// console.log(var1);
// console.log(var2);
// console.log(array);


// Objects 

// const obj ={
// name:"nizam",
// age:21,
// school:"dbhs",
// // "working location":"hyderabad",
// hobbies:["exerxise","praying","swimming"]
// } 

// console.log(obj);

// console.log(obj.name);
// obj.name = "nayeem";
// console.log(obj.name);

// console.log(obj["age"]);
// console.log(obj["working location"]);


// obj.home= "ring road";
// console.log(obj);

// obj["courses"]="web development";
// console.log(obj);

// console.log(obj.hobbies);

// obj.hobbies.push("games","running");
// console.log(obj.hobbies);
// console.log(obj.hobbies.length);

// var key = "email";
// var value = "uddinmdnizam61@gmail.com";


// obj[key]=value;
// console.log(obj);


// loops

// for in loop

// for(let ob in obj){

// console.log(ob+":"+obj[ob]);


// }

// Object.keys

// var obj1 = Object.keys(obj);

// console.log(obj1);

// for(let obj2 of Object.keys(obj)){
// console.log(`${obj2} : ${obj[obj2]}`);

// }


// Cloning object


// const obj ={
//     name:"nizam",
//     age:21,
//     // "working location":"hyderabad",
//     hobbies:["exerxise","praying","swimming"]
//     } 

// const obj3 = {
//     name1:"raheed",
//     age1:22,
// }
// const array = ["nizam","nayeem"]
    
// const obj2 = {...obj,...obj3,...array};;
// console.log(obj2);


// obj.school="dbhs";
// console.log(obj);
// console.log(obj2);

// // destructuring Objects


// const obj ={
//     name:"nizam",
//     age:21,
//     school:"dbhs",
//     // "working location":"hyderabad",
//     hobbies:["exerxise","praying","swimming"]
//     } 
    

// // const {name,age,...obj1}=obj;
// // console.log(obj1);
// // console.log(name);


// let {name:var1,age:var2,...obj1}=obj;
// console.log(var1);
// console.log(var2);
// console.log(obj1);
// console.log(obj1.school)

// Computed properties

// var key1 = "name";
// var key2 ="age";

// var value1 = "nizam";
// var value2 = 21;

// const obj = {

// [key1]:value1,
// [key2]:value2


// }

// console.log(obj)





// // // Objecst in Array

// const array = [
//     {name:"nizam",userId:1,gender:"male"},
//     {name:"zara",userId:2,gender:"female"},
//     {name:"ashraf",userId:3,gender:"male"}
// ]
// // console.log(array);

// const [{name:var1,userId:var4},var2,{...var3}]=array;
// // console.log(var1);
// // console.log(var3);
// // console.log(var4);
// var obj2={...array};
// console.log(obj2);
// console.log(obj2[2])
// console.log(var3)
// console.log(var2);
// console.log(typeof var2);
// console.log(var2.gender)


// FUNCTIONS
// var num = +prompt("enter the number");
// isEven(num);
// function isEven(num){


// if(num%2===0){
// alert("true");

// }else{
//     alert("return false");
// }



// }


// function isEven(num){

//     return alert(num%2===0);
// }




// function string(name){
// var output = name;
// return output[0];


// }

// console.log(string("zara"));


// function string(name){

// return name[0];
// 
// }

// console.log(string("afzal"));

// function findingtarget(array,target){

// for(let i=0; i<array.length;i++){
// if(array[i]===target){
//     return i;
// }

// }

// return -1;
// }

// // var array1 = [1,3,6,5,8];
// // var output = findingtarget(array1,5);

// // console.log(output);

// -----------


// FUNCTION EXPRESSION


// const isEven= function (num){


// if(num%2===0){
// return true;

// }else{
//     return false;
// }


// }
// var function1 = isEven(9);
// console.log(function1);


// const isEven =function (num){

//     return num%2===0;
// }
// console.log(isEven(4));




// const string =function (name){
// var output = name;
// return output[0];


// }
// var string1 = string("afzal")

// console.log(string1);


// const string =   function (name){

// return name[0];

// }
// var string1 = string("nizam")

// console.log(string(string1));

// const findingtarget=  function (array,target){

//     for(let i=0; i<array.length;i++){
//     if(array[i]===target){
//         return i;
//     }
    
//     }
    
//     return -1;
//     }

//     var array = [1,2,3,4,5];
//     var num = findingtarget(array,4);
//     console.log(num)



//    ARROW FUNCTION



// const string = (num)=>{

// var num1= 0;
// for(let i=0;i<=num;i++){
// num1 =num1+i;

// }
// return num1;
// }

// console.log(string(10));


// const primeNum =(num)=>{
//     var num2=0;
// for (let i=2;i<=num;i++){

//     var flag =0;

// for(var j=2;j<i;j++){
// if(i%j===0){
//     flag =1;
//     break;

// }

// }
// if(flag===0&&i>1){
//     console.log(i);
// num2 =num2+i;

// }


// }

// return num2;

// }
// var num1=primeNum(10);
// console.log(num1);




// function multi(num1){


// var num = 1;
// for(let i= 1;i<=num1;i++){

// num =num*i;
// console.log(i);


// }

// return num;




// }
// console.log(multi(10))

// const string = function (array,target) {

// for(let i=0;i<array.length;i++){

// if(i===target){

// return array[i];

// }


// }

// return -1;


// }



// var array1 = ["nizam","nayeem","afzal"];


// var array2= string(array1,1);
// console.log(array2);




// const number = (parameter)=>{

// // ---------//
// };


// const namae = (parameter)=> return String;




// nested function


// const  mad =()=>{

// const func = function (num1,num2){

// return num1+num2;

// }

// const func2 = (num3,num4)=>
// {


// return num3*num4;

// }
// console.log("iam nizam");

// console.log(func(2,4));

// console.log(func2(3,7));





// }

// mad();



// hoisting function



// num();
// const num= function (){


// console.log("iam from lords")

// }






// REST PARAMETER

// function func(a,b,...array){
// console.log(typeof array);
// console.log(Array.isArray(array));

// var num =0;

// for(let i=0;i<array.length;i++){
//     var c = array[i];

// num= num+c;


// }
// return a+b+num;


// }


// console.log(func(1,2,3,4,5,6));f






// function func(a,b,...c){

// var total = 0;
// for(let number in c){

// total =total+c[number];


// }

// return a+b+total;


// }
// console.log(func(1,2,3,4,5,6,))
