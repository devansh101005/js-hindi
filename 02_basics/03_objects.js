//Objects can be declared by two types 
//1 literals 2 constructors

//Object literals
  //Object.create //is methis se hi ban sakta hai this is called constructor method
const jsUser ={
    name:"Devansh",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}


//How to access
console.log(jsUser.email)
console.log(jsUser["email"])