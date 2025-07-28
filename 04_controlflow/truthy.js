const userEmail ="h@hitesh.ai"

if(userEmail) {
    console.log("user got email")
} else {
    console.log("dont have email")
}
//comparison ni hua but tab v prin ting user got email bcoz thi is truthy value

//falsy value
//false,0,-0,0n,"",null,undefined,NaN

//truthy value 
//"0",'false'," ",[],{},function(){}

//if objecs are empty how to check
const emptyObject ={}
if(Object.keys(emptyObject).length===0) {
    console.log("Object is empty")
}

//someinteresting things
//false==0  //true
//false='' //true
//0==''//true

//nullish collescing operator (??) null undefibed 

let val1;
//val1=5 ?? 10
val1=null ?? 10


console.log(val1)

//Ternary operator
// condition ? true: false 

const iceTeaPrice =100
iceTeaPrice >=80 ? console.log("less tha 80") :console.log("mre than 80")