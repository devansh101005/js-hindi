//2 types //primitive and non primitive 
// diifference is bases like how they are stored in memory and how we are accessing them

//Primitive 7 types 
//String//Number //boolean // null // //undefined //Symbol //BigInt(for big values)



//Non Primitive or Reference type 

//Array,Objects,Functions


//;ets talk about symbol
const id=Symbol('123');
const anotherId=Symbol('123')
console.log(id==anotherId)//false
//They both are different

//object
let myObj = {
    name:"Devansh",
    age:"20"
}

//function
const myFunction =function () {
    console.log("Hello World");
}



 
