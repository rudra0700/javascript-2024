// Async => not occuring at the same time

// Fetch data from server
// want to execute something with delay
// want to execute something after an event

// asynchronus behaviour may be triggered in majority with two things

// 1. Browser API/ Web API
// (setTimeout, click , onclick, mouseover) // whenever this function triggered , things may not happened immediately

{
    function printMe(){
        console.log("print me")
    }

    function test(){
        console.log("test")
    }
    setTimeout(printMe, 0)
    test()

}