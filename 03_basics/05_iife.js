//Immediately invoked function expression

//aisa function jo turant invoke ho jaye 
//why we needed this function ?
//kabhi kabhi ham chahte hain ki jais e hi hamaradatabse start ho turnat wo function start ho jye
//ya global scope se pollution nhi chahiye hame

(function chai() {
    console.log(`DB CONNECTED`)
})();  //so  this is how we use iife functions turant jhat se execute
//aur haan yahan semicolon use krna imp hai kyuki ye code kahan khatam krna hai ye hame js ko btana hoga

//()() // iife ka syntax

//but isko ham arrow function i tarah bhi to likh skte hain
  ( function aurcode()    {  //this is named iife
    console.log(`DB CONNECTED`);
  })();

  //can also be 2written as 

  (() =>{
    console.log(`DB connected`);
  }) ()

  //How to write unnamed iife 
((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) (`hitesh`)