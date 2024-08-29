
{
    const employee = {
        id: 7,
        name: "James",
        dept: "Spy"
    }

    // const id = employee.id
    // const name = employee.name

    const { id, name } = employee

    // console.log(id, name)

}

{
    const employee = {
        id: 7,
        name: "James",
        dept: {
            id: "D001",
            dept: "Spy",
            address: {
                city: "washington DC, 565, Hemilton",
                street: "chess qualia"
            }
        }
    };

    const {dept :{address : {city} }} = employee
    const { dept: { address } } = employee
    // console.log(city)
    // console.log(address)

};


{
    const employee = {
        id: 7,
        name: "James",
        dept: "Spy",
        age: 67
    }

    const rudra = employee.age ? employee.age : 25
    // console.log(rudra)
    const {name , age = 25} = employee
    // console.log(age)

    // console.log(employee.age)
};



{

    const employee = {
        id: 7,
        name: "James",
        dept: {
            id: "D001",
            dept: "Spy",
            address: {
                city: "washington DC, 565, Hemilton",
                street: "chess qualia"
            }
        }
    };



    const { name, dept: { dept: deptValue, address: { city, street } }, message = `${name} is ${deptValue} and lived in ${city} , ${street}` } = employee
    // console.log(message)
}




{
    const employee = {
        id: 7,
        name: "James",
        dept: "Spy",
        age: 67
    }

    // you must extract the value first then access it
    const { dept,  dept: department } = employee
    console.log(department)
}

{
    // dynamically holds the variable name
    const employee = {
        id: 7,
        name: "James",
        dept: "Spy",
        age: 67
    }

    let key = 'id'
    employee[key]

    // console.log(employee["id"])

    // console.log(employee[key])
}

{
    const employee = {
        id: 7,
        name: "James",
        dept: "Spy",
        age: 67
         
    }

    function getPropetyValue(key) {
        // return employee[key]    //regular way to access property dynamically

        const { [key]: returnValue } = employee
        return returnValue
    }
    const id = getPropetyValue("id")
    const name = getPropetyValue("name")
    // console.log(id, name)
}

{
    // most useful way of object destructuring. It uses in many framework like react and many libraries

    const employee = {
        id: 7,
        name: "James",
        dept: "Spy",
        age: 67
    }

    function logEmployee({ name, dept }) {
        //  return `${employee.name} is a ${employee.dept}`

        return `${name} is a ${dept}`

    }

    const result = logEmployee(employee)
    // console.log(result)
}

{
    function getUser() {
        return {
            name: "rudra",
            age: 24
        };
    };

    // regular way to access

    const result = getUser()
    // console.log(result.name, result.age)

    // Destructuring

    const { age , name} = getUser()
    // console.log(age, name)

}

{
    // access only one name property using for loop
    const users = [
        {
            name: "Alex",
            address: "America",
            age: 27
        }, {
            name: "Bob",
            address: "Italy",
            age: 26
        }, {
            name: "David",
            address: "Spain",
            age: 29
        },
    ]
    let alex;
    for (let i = 0; i < users.length; i++) {
    
        if (users[i].name === "Alex") {
            alex = users[i]; // this line will return the whole object
            // alex = users[i].name; // this line will return only the name alex from users array
            // break;
        }
    }
    //   console.log(alex)
}

{
   
    const users = [
        {
            name: "Alex",
            address: "America",
            age: 27
        }, {
            name: "Bob",
            address: "Italy",
            age: 26
        }, {
            name: "David",
            address: "Spain",
            age: 29
        },
    ]

    for (let { name, age } of users) {


       
        // console.log(`${name} is ${age} years old`)
    }
    
}

{
    const users = [
        {
            name: "Alex",
            address: "America",
            age: 27
        }, {
            name: "Bob",
            address: "Italy",
            age: 26
        }, {
            name: "David",
            address: "Spain",
            age: 29
        },
    ]

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let name = user.name;
        let age = user.age

        // console.log(`${name} is ${age} years old`)
    }
}


{
    // array destructuring
    const vehicles = ['mustang', 'f-150', 'expedition'];

    const [, , suv] = vehicles
    // console.log(suv)
}

{
    const createArr = new Array(3)
    createArr[0] = "rudra"
    createArr[1] = "durjoy"
    createArr[2] = "unmash"

    // console.log(createArr)
}

{
    // swap varibles with destructuring

    // const edibles = ["foods", "fruits"]

    // let [positionOne, positionTwo] = edibles
    // let temp = positionOne

    // positionOne = positionTwo
    // positionTwo = temp
    // console.log(positionOne, positionTwo)


}

{
    // swap variable without using temperary varialbe
    const edibles = ["foods", "fruits"]
    let [positionOne, positionTwo] = edibles;

    [positionOne, positionTwo] = [positionTwo, positionOne]
    // console.log(positionOne, positionTwo)

    //     const edibles = ["food", "fruits"];
    // let [positionOne, positionTwo] = edibles;
    // [positionOne, positionTwo] = [positionTwo, positionOne];
    // console.log(positionOne, positionTwo);

}

{
    // mutating array element using destructuring

    let edibles = ['foods', 'fruits'];
    [edibles[0], edibles[1]] = [edibles[1], edibles[0]];
    // console.log(edibles)


}
{
    // we can manipulate variable name with destructuring. its call alieses
    const freeCodeCamp = {
        frontend: "React",
        backend: "Node",
        database: "MongoDB",
    };

    const { frontend, backend, frontend: courseOne, backend: courseTwo } = freeCodeCamp
    //   console.log(courseOne, courseTwo)
    //   console.log(frontend, backend)
}

{
    var phone = {
        title: "iPhone",
        price: 800,
        description: "The iPhone is a smartphone developed by Apple"
    };

    const { title, price, description } = phone
    //   console.log(title, price, description)
}

{
    var phone = {
        title: "iPhone",
        price: 800,
        description: "The iPhone is a smartphone developed by Apple"
    };

    var {title, price, description} = {
        title: "iPhone",
        price: 800,
        // description: "The iPhone is a smartphone developed by Apple"
    }

    console.log(description)
}