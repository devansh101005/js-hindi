console.log(2>1);  //true

console.log("2">1);//true
//so its not gives a predictable result
console.log(null==0);//false
console.log(null>0);//false
console.log(num>=0);//true

//The reason is that an equality cgheck == and comparison < > >= <= 
//works differently 
//Comparison converts null to a  number treating it as 0
//That why (3) null>= 0 is true and (1) null >0 is false