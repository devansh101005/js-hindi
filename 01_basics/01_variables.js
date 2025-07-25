const accountId=144553
let accountEmail="hitesh@google.com"
var accountPasswpord="12345"
accountCity="jaipur"

//accountId=2 not allowed

accountEmail="hc@hc.com"
accountPassword=2345
accountCity="Banglore"

console.log(accountId);

/*   Prefer not to use var because of issue of block scope 
and functional scope */ 
console.table([accountId,accountPassword,accountCity])


