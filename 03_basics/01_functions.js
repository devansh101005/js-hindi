function sayMyName() {
    console.log("D")
    console.log("E")
    console.log("V")
    console.log("A")
    
}
sayMyName();

//function to add number

function addTwoNumbers(num1,num2) {//here paremthesis ke beech waali thing parametres
    //console.log(num1+num2) its just printing not saving that value
    let result= num1+num2;
    return result;

}
addTwoNumbers(7,9); //16  //7.9 are argumnets


function loginUserMessage(username) {
    return `${username} just logged in`
}
//console.log(loginUserMessage("Devansh"))

console.log(loginUserMessage())//undefined just logged in




//shopping cart  
//we dont know here kitne parametres aa rhe hain

function calculateCartPrice(...num1) {  //... is rest operator  or haan ... ko hi spread operator bola jaata hai //ti it means use case pe dend krega kimkya bolegein 
    return num1

}
console.log(calculateCartPrice(200,300,400))


//object in function

const user = {
    username:"Hitesh",
    price:199
}
function handleObject(anyObject) {
    console.log(`Usename is ${anyObject.username} and price is ${anyObject.price}`)
}


