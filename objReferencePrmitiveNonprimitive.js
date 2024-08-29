{
    // primtitive type are basic type that like string , number , boolean and non primitive are the complex type that made using this basic SVGUnitTypes(primitive types)
    
    // primitive data types works with stack memory

    //pass by value types
    let count = 10
    let item = 20
    count = item // here item is a new copy of (let item = 20). it will not change the original item value
    item = item + 10
    // console.log(count)
    // console.log(item)
}

{
    // pass by reference type
    let user = {
        name: "sam"
    }
    let employee = {
        name: "alex"
    }
    user = employee
    // console.log(user === employee) // false

    employee.name = "rudra"
    // console.log(user)
    // console.log(employee)

}

{
    // in javascript whenever we dealing with the Object copy is not same as clone

    // example of copy 
    let car1 = {
        name: "tata"
    }
    let car2 = {
        name: "tata"
    }

    car1 = car2
    // console.log(car1)
    // console.log(car2)
}

{
    // example of Clone with spread operator
    let car1 = {
        name: "tata"
    }
    let car2 = { ...car1 }
    car1.name = "Lamborgini"
    // console.log(car1)
    // console.log(car2)

    if (car1 === car2) {
        // console.log("this is true")
    } else {
        // console.log("this is false")
    }
}

{
    // But spread operator does not work while the object has an another object as a property. it means an object has a property and that property is itself an object

    let user = {
        name: "rudra",
        address: {
            street: "234, 2nd crossroad",
            city: "Banglore"
        }
    }

    let clonedUser = { ...user }
    user.name = "ardur"

    user.address.street = "360, 1st cross road"
    // console.log(user)
    // console.log(clonedUser)
}

{
    // deep cloning
    let user = {
        name: "rudra",
        address: {
            street: "234, 2nd crossroad",
            city: "Banglore"
        }
    }

    let deepCloned = structuredClone(user)

    user.address.street = "360 , 1st cross road"
    //  console.log(user)
    //  console.log(deepCloned)
}

{
    function modifyNestedObject(arr) {
        arr[0][0] = 100;
    }

    let nestedArray = [[1, 2], [3, 4], [5, 6]];
    // console.log("original array",nestedArray)

    // modifyNestedObject(nestedArray)
    // console.log("modifying array: " , nestedArray)
    // console.log(nestedArray)
}

{
    // copy an nested array
    let nestedArray = [[1, 2], [3, 4], [5, 6]];

    let cloneNestedArray = nestedArray.map((item) => [...item])
    // console.log(nestedArray)
    // console.log(cloneNestedArray[0][0] = 100)
    // console.log(cloneNestedArray)
    // console.log(nestedArray)

}

{
    // pass nested array without modify the original nested array
    function modifyNestedObject(arr) {
        let copiedArray = arr.map(innerArr => [...innerArr])
        copiedArray[0][0] = 100;
        return copiedArray;
    }

    let nestedArray = [[1, 2], [3, 4], [5, 6]];
    // console.log("original array",nestedArray)

    const result = modifyNestedObject(nestedArray)
    // console.log("modifying array: ", result)
    // console.log("original array : ", nestedArray)
}

{
    // pass nested array without modify the original nested array using sturctureClone API (deep clone)
    function modifyNestedObject(arr) {
        let deepCloned = structuredClone(arr)
        deepCloned[0][0] = 100;
        return deepCloned;
    }

    let nestedArray = [[1, 2], [3, 4], [5, 6]];
    // console.log("original array",nestedArray)

    const result = modifyNestedObject(nestedArray)
    // console.log("modifying array: ", result)
    // console.log("original array : ", nestedArray)  
}

{
    function modifyNestedObject(arr) {
        let copiedArray = JSON.parse(JSON.stringify(arr))
        copiedArray[0][0] = 100;
        return copiedArray;
    }

    let nestedArray = [[1, 2], [3, 4], [5, 6]];
    // console.log("original array",nestedArray)

    const result = modifyNestedObject(nestedArray)
    //  console.log("modifying array: ", result)
    //  console.log("original array : ", nestedArray)   
}

