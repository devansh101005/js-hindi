class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username ${this.username}`);
    }
    static createId(){
   return `123`
    }
}

const hitesh =new User("hitseh")
//console.log(hitesh.createId())

class Teacher extends User {
    constructor(username,email) {
        super(username)
    this.email=email
    }
}

const iphone =new Teacher("iphone","iphobne@hitesh.com")
iphone.logMe();