//Dates
//in js date starts from 1970

let myDate=new Date()
console.log(myDate);  //a date will be apperaed buttought to read

console.log(myDate.toString())
console.log(myDate.toLocaleString());

console.log(typeof myDate)

let myCreatedDate =new Date(2023,0,23); //month 0 start hote hain
console.log(myCreatedDate.toDateString());


let myTimeStamp= Date.now();
console.log(myTimeStamp);

let newDate=new Date()
console.log(newDate);
newDate.toLocaleString('default',{
    weekday:"long"
})
