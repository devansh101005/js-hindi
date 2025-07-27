//scope ki kahani hi let var aur const se start hoti hai
// let a =10
// const b=20
// var c=30   //var was not useful in block scope  //kyuki ye scope k bahar bhi print ho jaata hai
//lets see how 
//{}  //curly braces is scope //agar curly braces funcion ,ya if else k saath aata hai to ise scope kehte hain

if (true ) {  //if else andar jo bhi likha hai wo hai block scope //if ke bahar jo likha hai wo hai global scope
     let a =10
     const b=20
     var c=30 
}

//console.log(a) //not printed
//console.log(b) //not printed
console.log(c)  //value of c will be printed  //nhi honi chahiye thi


//but haan le aur const mai jo global scope mai likha hai wo global se print hoga jo ,aur jo block mai likha hai wo block se print hoga

//imagine agar hame let a=50 diya hota in global scope agar ham global se print karwate to 50 hi aata ,aur agar hmne usi a ki value in block 25 di hoti aur use block k andar se hi print lkarwate to 25 hi aati


//remeber jab ham browser k console mai global scope use krte hain ,aur jab ham node environment mai global scope use karte hain dono alag alag hai

