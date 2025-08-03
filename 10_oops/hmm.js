//Array bhi ek type ka object hai 
function multiple5(num) {
    return num*5;
}
multiple5.power=2

console.log(multiple5.power)
console.log(multiple5.prototype); //{} 

//function function bhi hai function object bhi hai
//js has prototypal inheritance 

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment =function(){
    this.score++
}

createUser.prototype.printMe=function() {
    console.log(`price is ${this.score}`)
}

const chai =new createUser("chai",25)
const tea =new createUser("chai",250)

chai.printMe()
