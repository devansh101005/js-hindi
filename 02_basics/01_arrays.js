//array
const myArr= [0,1,2,3,4];//elements//in single array elements can be different too 
//in  js array are resizeable 
//read documents for more detail  //mdn web docs
console.log(myArr[0]);

const myHeroes =["Shaktimaan","Superman"];

//arrays mai bhi console mai prototypes milte hain

const myArr2 = new Array(1,2,3,4);
console.log(myArr[1]);

//Array Method 
myArr.push(6)//adds value 
console.log(myArr)  // myArr is changed 

myArr.unshift(0)
console.log(myArr);  //adds sabse phle that value //adds array ke start mai that value 
//this is so time consuming thing

console.log(myArr.includes(9)); //false 

const newArr= myArr.join()

console.log(myArr)
console.log(newArr)  //type iska string ho gya hai

//splice utna portion nikala deta hai 
//splice manupilates the orignal array