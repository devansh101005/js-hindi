//const tinderUser = new Object()  //Thi is also a object  //singleton object
const tinderUser ={}  //Thos is also declared   //non singkleton object

tinderUser.id ="1234abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn =false

//console.log(tinderUser)

//see this also
const regularUser ={
    email:"some2gmail.com",
    fullname: {
        userfullname : {
            firsname:"Devansh",
            lastname:"Pandey"
        }
    }
}

//so may nesting

console.log(regularUser.fullname);

//question chaining 

//? ye lga dete hain aage like agar ye value exist hi ni karti ho to

//combining object
const obj1 = { 1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3=Object.assign({},obj1,obj2)  //parenthesis lgao ya nalgao koi zaroorat ni but lgana theek rehta hai //read in documentation for more
console.log(obj3)




