//promises  //promise is itself a object 
//before promise introduce in js ...people uses promise libraries like Q and blubird
//promise ek call back leta hai
//  const promiseOne = new Promise(function(resolve,reject){
// //     //do an async task
// //     //db calls,cryptography,network related 
//     setTimeout(function(){
//         console.log("Async task is completed")
//          resolve()
//     },1000)
// // })//promise create dand hold in a variavle promiseOne

// // //consuming promise
//  promiseOne.then(function(){
//     console.log("promise consumed")
//  })


//other way to create a promsie 
new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved ")
})

//3rd promise 
const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"Chai",email:"chai@code.com"})  //isme data bhi pass kiya ja skta hai like data
    },1000)
})

promiseThree.then(function(user){
console.log(user)
})

//4th promise 
const promiseFour=new Promise(function(resolve,reject) {
setTimeout(function(){
let error =false
if(!error) {
    resolve({username:"hitesh",password:"12345678"})
} else {
    reject('ERROR:SOMETHING WENT WRONG')
}
},1000)
})
promiseFour
.then((user)=> {
console.log(user);
return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
}).finally(()=>console.log("The promise is either resolved or rehjected"))

//promise 5

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
let error =true
if(!error) {
    resolve({username:"javascript",password:"123478"})
} else {
    reject('ERROR:JS WENT WRONG')
}
},1000)
});
//zaroori ni promise hamesha .then ya .catch se hinm handle ho async await se bhi handle  ho skta ahai

async function consumePromiseFive(){
   try{
    const response= await promiseFive
   console.log(response)
} catch (error){
    console.log("erro hai bhai")
}
}
consumePromiseFive()




///// some things for next class 
// async function getAllUsers() {
// try{
//     const response =await fetch('https://api.github.com/users/devansh101005')
//    const data =await response.json()
//    console.log(data)

// } catch (error){
//     console.log("E:",error)
// }
// }


// getAllUsers()


//imagine yhi try catch upar wala cheez .then .catch inse sbse krna hota 

fetch('https://api.github.com/users/devansh101005')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))

