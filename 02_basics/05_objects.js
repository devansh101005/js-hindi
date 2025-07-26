//Destructuring of objects

const course = {
    coursename:"js ijn hindi",
    price: "999",
    courseInstructor :"hitesh"
}
//course.courseInstructor  //ye thioda length hai

const {courseInstructor:instructor} =course
console.log(instructor);  //output whi ayega




//Concept of apis

//apna kaam kisi aur k sar daalna 

//json format 
// {

//     "name":"Hitesh",
//     "courseName":"js in hindi",
//     "price":"free"
// }

//API can be in array format too