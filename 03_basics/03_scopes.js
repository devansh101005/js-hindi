//nested scope

function one() {
    const username="Devansh"

    function two() {
        const website="youtube"
        console.log(username); //check karo ki abhi ham is function k andar hain to kya ham username ko access kar skte hain
    }
    //console.log(website) //this cant be accessed as we are outside of scope
    two()
}
one()

//Remember bade se chote ice cream le skte hain but chote se bade ice cream nhi le slkte hain

//aur isse related ek aur cheez hoti hai wo englis chaannel pe dekh  lo ya sie future mai batayegein

//now see same thing foe if else
    if(true) {
        const username="I dont kneo"
        if(username === "I dont knoe") {
            const website= "twitter"
            console.log(username+website)
        }
        //console.log(website);  this cant be acceses as scope k bahar
    }  
    //console.log(username);  ye bhi ni access ho skta hai


    //********************Interesting****************/


    //agar add one upar karein to??
    addone(6)  //will be executed no error ans will be 6
    function addone(num) {
        return num+1;

    }
    //addone(5)

    //agar addTwo upar karein to
    addTwo(5)  //error

    const addTwo =function(num) {  //ye bhi function hai but kabhi kab hu isko expresssion bhi boldete hain
        return num+2
    }
    //addTwo(5)