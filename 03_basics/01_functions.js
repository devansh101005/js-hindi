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

