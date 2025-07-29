// for of loop  / / arrY SPECIFIC LOOP

const array =[1,2,3,4,5]

for (const num of array) {
    console.log(num)
    
}


const grretings ="Hello Worls!"
for (const greet of grretings) {
    console.log(greet)
    
}

//Maps  //they contain unique values with order they put in 
const map=new Map()
map.set('In',"India")
map.set('USD',"United states of america")
console.log(map)

for (const [key,value] of map) {
    console.log(key,':-',value)
    
}
//object mai for off loop
// const myObject ={
//     "Game1":"nfs",
//     "game2":"spiderman"
// }
// for (const  [key,value ]of myObject) {

//     console.log(key ,':-',value);
    
// }   //remember object mai not iteratable 



