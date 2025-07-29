//for duplicate CTRL+D 

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element)
    
}    

//Nested loop
for (let i = 0; i < 10; i++) {
    console.log(`outer loop: ${i}`)
    for (let j=0; j<=10; j++) {
        console.log(`inner loop ${j} and inner loop ${i}`)
        
        
    }
    
    
}
//array wala loop

let myArray=["flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}  

//loops with condition // break and continue

for (let index = 1; index < 21; index++) {
    //we want 5 number se hi bahar lo jaye ham loop se 
    if(index==5) {
        console.log(`detected 5`);
        break;
    }
    console.log(`value of i is ${index}`)

    
    
}