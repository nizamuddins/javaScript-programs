// and  or operator
let age = 16 
let firstName = "Nizam";



// if(firstName[0] === "N"){
//     console.log("your name starts with N")
// }
if (firstName.slice(0,1) === "N") {
    console.log("your name start with N");
}

if(age > 18){
    console.log("you are above 18");
}



// By using AND operator combining above two equation

if(firstName.slice(0,1) === "N" && age>18){
    console.log("Name starts with N and above 18");
}else{
    console.log("inside else");
}
 
// By using OR Opertor

if(firstName[0] === "N" || age>18){
    console.log("inside if");
}else{
    console.log("inside else");}