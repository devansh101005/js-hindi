//Code kisi cindition pe run hona chahiye 

//if 

//if(2=="2")
 if(2==="2"){  //if parenthesis k andar ki condition true then scope ka code will be executed othewise not
console.log("Executed") //=== hai to it will not get executes as datatype alag hai
}

//comparison operator 
//<,>,>=,<=,==,!=
//=== this is also strict equal //this also check datatype 

//if else 
const temp=41;
if(temp===41) {
    console.log("less than 50")
} else {
    console.log("greater than 50")
}

//short hand notation

const balance =1000
//if(balance>500) console.log("test");  //explicit scope  //but not good way of writing code

//nesting 

if(balance<500) {
    console.log("less than")
} else if(balance <750){
    console.log("ji haan")
} else {
    console.log("less")
}

//
const userLoggedIn =true;
const debitCard =true;
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn&&debitCard) {
    console.log("allowed to buy course")
}
if(loggedInFromGoogle||loggedInFromEmail) {
    console.log("user logged in")
}