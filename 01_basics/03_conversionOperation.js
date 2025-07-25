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
