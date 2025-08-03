const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor)

// we cant change pi ki value 


//lets talk abou iski descriptor property
const chai ={
    name:"gingerchai",
    price:250,
    isAvaailable:true
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
    writable: false,
  enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))



