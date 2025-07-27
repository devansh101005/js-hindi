const user ={
    username:"Devansh",
    price:999,
    welcomeMessage:  function() {
        console.log(`${this.username}, welcome to website`)
    }
}  //is jo curly braces k andar hao wo current contexy hai jab ham current context ko refer karte hain tab ham this keyword ka use karte hain


// user.welcomeMessage() //Devansh,welcome to website
// user.username="Sammy"  //here context is changed
// user.welcomeMessage();

console.log(this) //{} aka empty object will be printed as there are no context
//bit if we try to enter consile.log(this) in browser console then window will be printed

function chai() {
    let username="hitesh"
    console.log(this)  //but agar this.username kp print karegein tab wo undefined batyega
}
chai()  //by this multiple value will be printed



//other way of declartion offunction

//arrow function 
const chai2 =() => {
    let username="Dev"
    console.log(this)
}   



//
const add2 =(num1,num2) => {  //aise bhi use kar skte hain arrow function
    return num1+num2
}
console.log(add2(3,4))

//aur implicit return ki tara bhi use kar skte hain

const add3 = (num1,num2) => (num1+num2)  //implicit
console.log(add3(3,4))

