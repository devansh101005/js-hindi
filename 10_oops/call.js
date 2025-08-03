function setUsername(username) {
    this.username=username
} 
function createUser(username,email,password) {
   // setUsername(username)  //khaili aise likhne se call ni hua  to call use .call
setUsername.call(this,username)  //ab username print hoga 


    this.email=email
    this.password=password
}

const chai= new createUser("chai","chai@fb","123")
console.log(chai);