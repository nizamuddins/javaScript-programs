 const obj={
     name:"nizam",
     age:21,
    
 }

//  console.log(obj);
//  console.log(obj.age);
//  console.log(obj["name"]);

// obj.name = "nayeem";
// console.log(obj);
// obj.height= 6.5;
// console.log(obj);
// obj["school"] = "dbhs";
// console.log(obj);
// const key = "hobbies";
// const value="praying";

// const key1 = "email";
// const key2 = "work";
// const value1 = "uddinmdnizam61@gmail.com";
// const value2 = "student";

// obj[key]=value;
// console.log(obj);

// const obj2={

// [key1]:value1,
// [key2]:value2

// }

// console.log(obj2)


// const obj1= {...obj,"work":"student"};
// console.log(obj1);

// for(let ob in obj){
//     console.log(ob+":"+obj[ob]);
// }

// Object.keys(obj);
// console.log(Object.keys(obj));

// for(let ob of Object.keys(obj)){
//     console.log(ob+":"+obj[ob]);

// }
// var obj1 = ["nizam",21];
    
// var object = {...obj1};
// console.log(object);


// const {name:var1,age}= obj;
// console.log(var1);

const array1= [

{userId:1,name:"nizam",gender:"male"},
{userId:2,name:"nayeem",gender:"male"},
{userId:3,name:"afzal",gender:"male"},

]
console.log(array1);
for(let i=0;i<array1.length;i++){
    console.log(array1[i].name)
}


const [var1,var2,...array2]=array1;
console.log(var1);

const [{userId,name},...obj1]=array1;
console.log(userId);
console.log(obj1)
console.log(name)