let score ="33abc"

console.log(typeof score);
console.log(typeof(score));  //both are same

//conversion

let valueInNumber =Number(score);
console.log(typeof valueInNumber);
//converted successfully

console.log(valueInNumber);//gives output NaN  //NaN is also a type 

//js have some issues like no strict check

//"33" => 33
//"33abc"=> NaN 
//"true"=. 1;

let isLoggedIn =1

let booleanIsLoggedIn =Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

//conversion karte time dhyan rakho
// "" => false
// "Devansh"=> true



//*****************Opeartions */
let value=3
let negValue=-value
console.log(negValue)

str1 ="hello"
str2="Devansh"
str3=str1+str2;
console.log(str3)


//
console.log("1"+2); //12
console.log(1+"2");  //12
console.log("1"+2+2); //122
console.log(1+2+"3");//32

//Read documentation to undderstand this 
//https://tc39.es/ecma262/multipage  //in this goto abstract operation

let num1 ,num2 ,num3 

num1 =num2=num3 =2+2  //these type of code are not appreciated well 



//for prefix and postfix go to mdn it will help


