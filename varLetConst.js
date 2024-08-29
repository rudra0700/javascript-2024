//scope
//Reassignment
// when we access variable without declare

// block scope
{

    {
        let name = "rudra"
        const ZIP = 4347
        // var age = 24
    }
    // console.log(name)
    // console.log(ZIP)
    // console.log(age)
}


{
    // function scope
    // Even if it is declared with var keyword , it will not accessible outside of the function which is called functional scope
    function f1() {
        let name = "rudra"
        const ZIP = 4347
        var age = 24
    }
    f1()
    // console.log(name)
    // console.log(ZIP)
    // console.log(age)

}

{
    // Global Scope
    let name = "rudra"
    const ZIP = 4347
    var age = 24

    function f1() {
        // console.log(name)
        // console.log(ZIP)
        // console.log(age)
    }
    f1()
}

{
    let name = "rudra"
    const ZIP = 4347
    var age = 24

    name = "barua"
    // ZIP= 7896 you can not reassign  the value which is declared by const keyword
    age = 45
    // console.log(name)
    // console.log(ZIP)
    // console.log(age)

}

{
    // But when it comes to object declared by const keyword , we are pretty much allowed to change the property of that object , but can not reassign the object itself with the same name with assigment(=) operator. Its because object is a non- primitive data types. when we assign a object to a variable, it creates a unique memory address in memory location and in that memory address the actual value is restored. So when we change the property of an object we actually change the value of this object, not the entire memory address

    
    const blog = {
        url: "rudra.com"
    };
    // but we cannot do like this

    // const blog = {}
    blog.url = "barua.com"; // this is pretty much allowed
    // console.log(blog);
}

{
    function test(){
        let age = 89
        if(true){
            let name = "rudra"
            // console.log(age)
        }
    
    }
    test()
}
 
{
    // variabe declared with var keyword belong to the window object
    var carName = "volvo"
    // console.log(window.carName) // this line is going to work

    // variabe declared with let keyword does not belong to the window object
    let carName = "mercedes"
    // console.log(window.carName) // this is not going to work
}