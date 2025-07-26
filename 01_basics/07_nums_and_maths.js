const score =400;  //number defined
console.log(score);

const balance =new Number(100);
console.log(balance);  //Number:100

console.log(balance.toString());  // type string ho gya ab

console.log(balance.toFixed(2)); //100.00 is output

const otherNumber =23.98764678;
console.log(otherNumber.toPrecision(3))

const hundreds=1000000;
console.log(hundreds.toLocaleString('en-IN'));  //NOW COMES WITH INDIAN STYLE

//************************Maths************* */

console.log(Math);  //run this in cionsole boht si cheeze milegi 

console.log(Math.abs(-4));
console.log(Math.round(5.9));

console.log(Math.floor(4.2));

console.log(Math.floor(Math.random()*10)+1); //always gives value between 0-1

const min =10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min)  //Remember this