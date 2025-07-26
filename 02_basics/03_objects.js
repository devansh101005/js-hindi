//Objects can be declared by two types 
//1 literals 2 constructors

//Object literals
  //Object.create //is methis se hi ban sakta hai this is called constructor method

  //symbol ko aise likhte hain
  const mySym=Symbol("key1")
  //question -use symbol as key 
const jsUser ={
    name:"Devansh",
    age:18,
    [mySym]:"myKey1",//we have to write this is square bracket to use this as symbol
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}


//How to access
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])  //used as symbol

//if we want to freeze object
//Object.freeze(jsUser)
jsUser.email="hhh@gmail.com"
console.log(jsUser)

//Adding function 

jsUser.greeting = function() {
  console.log("Hello js  User");
}

jsUser.greetingTwo = function() {
  console.log(`Hello js  User,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo())


//value hamehs access . se hoti hai but khi khi square se bhi hoti hai




