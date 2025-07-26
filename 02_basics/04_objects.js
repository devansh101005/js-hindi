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
const obj4 = {...obj1,...obj2}//isse bhi combine ho skta hai  //jyada yhi syntax use hota hai
console.log(obj3)

//also seee this

//imagine we want keys of object

console.log(Object.keys(tinderUser));  //iska output type array hai yaad kar lo 

console.log(Object.entries(tinderUser));


//kabhi kabhi object k through loop karke calue nikaalte hain but kabi kabhi wo value exist nhi karti yo iuske liye

//we can ask kya value hai
console.log(tinderUser.hasOwnProperty('isLoggedIn'))





