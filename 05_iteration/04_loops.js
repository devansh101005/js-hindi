const myObject ={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by app'
}

//so in objects we use forin
for (const key in myObject) {
    console.log(myObject[key])
    
        
    }

    //can for in loop used in array?
    const programming=["js","rb","py","java"]
    for(const key in programming)
    {
        console.log(key)
    }
