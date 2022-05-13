// block scope vs function scope 


// let and const are block scope
// var is function scope 

// if(true){
//     var firstName = "nizam";
//     console.log(firstName);
// }

// console.log(firstName);

for(let i=0;i<10;i++){

console.log(i);

}




function myApp(){
    // var flag ="nizam";
    if(true){
        var firstName = "nizam";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);

}
    // console.log(flag);

myApp(); 

