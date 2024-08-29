// tapash adikary reference

{
    function getCamera() {
        return "canon"
    }

    function getCapture(camera) {
        return camera()
    }

    const test = getCapture(getCamera)
    // console.log(test)

}

{
    function returnFunc() {
        return function () {
            // console.log("hi")
            return "hi"
        }
    }

    const test = returnFunc()
    // console.log(test())

}

{
    function returnFunc() {
        function anotherFunc() {
            console.log("this is me")
        }

        anotherFunc()
    }

    // returnFunc()
}
{
    function returnFunc() {
        return function () {
            console.log("hi")
            // return "hi"
        }
    }

    // returnFunc()()
}

{
    //   example of higher order function . A function that take a  function as an argument or return a function  from itself

    function addition(num, pad) {
        return num + pad
    }
    function subtraction(num, pad) {
        return num - pad
    }
    function multiply(num, pad) {
        return num * pad
    }
    function division(num, pad) {
        return num / pad
    }

    function smartFunction(data, operation, pad) {
        let result = []
        for (const element of data) {
            result.push(operation(element, pad))
        }
        return result
    }
    let array = [45, 67, 87, 54, 34]
    const test = smartFunction(array, division, 3)
    // console.log(test)
}


// sumit saha reference

{
    // in javascript function is also a special types of javascript Object
    function hello() {
        console.log("hello")
    }

    hello.language = "javascript"
    // console.log(hello.language)
}

{
    var players = [
        { name: "rudra", avg: 36 },
        { name: "unmash", avg: 37.8 },
        { name: "durjoy", avg: 35 },
        { name: "pronoy", avg: 38.97 },
    ]

    let playerAvgThirty = []
    for (let i = 0; i < players.length; i++) {
        if (players[i].avg > 37) {
            playerAvgThirty.push(players[i])
        }
    }

    // console.log(playerAvgThirty)

    // players.filter((player) => {
    //     console.log(player.avg > 37)
    // })

    // console.log(test)
}

{
    var languages = ["javascript", "java", "php", "node js"]

    function myMap(languages, callback) {
        if (typeof callback !== 'function') {
            console.error("Callback is not a function")
            return
        }
        let returnValue = [];
        for (const language of languages) {
            let index = languages.indexOf(language)
            var newElement = callback(language, index + 1)
            returnValue.push(newElement)
        }
        return returnValue
    }

    const result = myMap(languages, (element, index) => {
        return `${index} : ${element.length}`
    })

    // console.log(result)
}

// freecodeCamp reference
{
    let radius = [1, 2, 3]
    function calculateArea(radius) {
        let output = []
        for (let i = 0; i < radius.length; i++) {
            output.push(Math.PI * radius[i] * radius[i])
        }

        return output
    }

    const result = calculateArea(radius)
    // console.log(result)
}
{
    // using higherOrder function caluculate diameter
    const radius = [1, 2, 3]
    // const diameter = function (radius) {
    //     return 2 * radius
    // }

    const circumference = function (radius) {
        return 2 * Math.PI * radius;
    }

    const caluculate = function (radius, logic) {
        let output = []
        for (let i = 0; i < radius.length; i++) {
            output.push(logic(radius[i]))
        }

        return output
    }

    // const result = caluculate(radius, diameter)
    const result2 = caluculate(radius, circumference)
    // console.log(result2)
}

{
    const users = [
        { firstName: 'John', lastName: 'Doe', age: 25 },
        { firstName: 'Jane', lastName: 'Doe', age: 30 },
        { firstName: 'Jack', lastName: 'Doe', age: 35 },
        { firstName: 'Jill', lastName: 'Doe', age: 40 },
        { firstName: 'Joe', lastName: 'Doe', age: 45 },
    ]

    function test(users) {
        let output = []
        for (let i = 0; i < users.length; i++) {
            let firstName = users[i].firstName
            let lastName = users[i].lastName
            output.push(firstName + " " + lastName)
        }

        return output
    }

    const finalResult = test(users)
    // console.log(finalResult)
}

{
    const shoppingCart = [
        { name: 'Apple', price: 1.99, quantity: 3 },
        { name: 'Apple', price: 1.99, quantity: 3 },
        { name: 'Xiomi', price: 2.99, quantity: 2 },
        { name: 'Samsung', price: 3.99, quantity: 1 },
        { name: 'Tesla', price: 3.99, quantity: 1 },
        { name: 'Tesla', price: 4.99, quantity: 4 },
        { name: 'Nokia', price: 4.99, quantity: 4 },
    ]

    const products = shoppingCart.reduce((productGroup, product) => {
        const name = product.name;
        if (productGroup[name] == null) {
            productGroup[name] = [];

        }
        productGroup[name].push(product);

        return productGroup;
    }, {});

    // console.log(products);
}

           