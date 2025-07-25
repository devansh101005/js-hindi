const name="Hitesh"
const repoCount=50
console.log(name+repoCount); //This is outdated

console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`)


//String can also be declared as 
const gameName = new String(`devansh-pa`);

console.log(gameName[1]);

//in  console we can see prototype and use them as functions like we use .length 
//matlab prototype  mai jitni bhi cheee hai unhe bhi ham use kar skte hain .length ki tarh

console.log(gameName.toUpperCase());//DEVANSH

const newString=gameName.substring(0,4);
console.log(newString);

const newStringOne ="   hitesh   "
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
