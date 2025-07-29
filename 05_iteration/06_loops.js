const coding =["hs","ruby","java","python","cpp"]

const values =coding.forEach((item) => {
    console.log(item)
})
console.log(values)  //undefined 
//thos means for each does not return values
//so how to rrturn value ????????????????????


const myNums =[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.filter((num) => num>4)  //remember agar ham scope open krte hain tab return keyword use karna pdega ...like ....{return num>4}

console.log(newNums);

//if not using filter then how

const newNums1 =[]

myNums.forEach((num) => {
    if (num>4) {
        newNums1.push(num)
    }
})
console.log(newNums1)


//practice some things 

const books= [
    { "title": "Book Ten", "genre": "Fiction", "publish": 1990, "edition": 2005 },
{ "title": "Book Eleven", "genre": "History", "publish": 1985, "edition": 2010 },
{ "title": "Book Twelve", "genre": "Non-Fiction", "publish": 2001, "edition": 2015 },
{ "title": "Book Thirteen", "genre": "Science", "publish": 1995, "edition": 2008 },
{ "title": "Book Fourteen", "genre": "Fiction", "publish": 1988, "edition": 2002 },
{ "title": "Book Fifteen", "genre": "History", "publish": 2003, "edition": 2017 },
{ "title": "Book Sixteen", "genre": "Non-Fiction", "publish": 1979, "edition": 1995 },
{ "title": "Book Seventeen", "genre": "Science", "publish": 2010, "edition": 2014 },
{ "title": "Book Eighteen", "genre": "Fiction", "publish": 1992, "edition": 2006 },
{ "title": "Book Nineteen", "genre": "History", "publish": 1983, "edition": 1999 },
]

const userBooks=books.filter((bk)=>bk.genre==="History" )
let userBooks2 =books.filter((bk) => bk.publish>=2000)
console.log(userBooks)
console.log(userBooks2)



