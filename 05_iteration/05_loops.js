//for each loop  //one of the best for array
const coding =["js","ruby","java","python","cpp"]

coding.forEach(function (item) {  //isme function ka naam ni hota hai 
    console.log(item)
})

//we can use even arrow function in tghis loop
coding.forEach ((val) =>{
    console.log(val)
} )

//is tarah bhi for each loop use kiya ja skta hai dekho neeche 
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)



//
const myCoding = [
    {
    languageName:"js",
    languageFile:'javascript'
},
{
    languageName:"java",
    languageFile:'javaspt'
},
{
    languageName:"python",
    languageFile:'ml'
},
]

myCoding.forEach((item) => {
console.log(item.languageFile)
})
