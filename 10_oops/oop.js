//object literal

const user ={
    username:"Hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        console.log("got user details from dtsbase");
        //console.log(username)  //this will give not defined as isko pta hi nji kaun a username 
        console.log(this)
    }

}

console.log(user.username)

//this keyword is used in giving current context

//now imagine we have to create user2 to kya itna sara code fir e likhna hoga??/ may be ni ab ham usekaregein constructor function

//const promiseOne = new Promise() 
//const date = new Date()     //new keyword is constructor function

function User(username,loginCount,isLoggedIn) {
   
 this.username= username; //left side variable hai aur right side ham usme value de rhe hain upar wale username ki
 this.loginCount=loginCount;
 //method bhi daal skte hain
 this.greeting =function(){
    console.log(`Welcome ${this.username}`)
 }

 return this // likho ya na likho value return hogi hi 
}
const userOne =new User("hitesh",12,true)
const userTwo =new User("Chai aur code",11,false)

console.log(userOne);