//reduce 
//user supply reducer 

//it has two things ...accumulator ,current value
// const myNums =[1,2,3]
//  const myTotal=myNums.reduce(function (acc,currval)  {
//     console.log(`acc: ${acc} andcurrval is ${currval}`)
//     return acc+currval
//  },0)
//  console.log(myTotal)

//arrow function mai yhi same cheez

const myNums=[1,2,3]
const myTotal =myNums.reduce((acc,curr)=> acc+curr,0)

console.log(myTotal)