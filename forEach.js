{
    var person = {
        first: "Pradeep",
        actions: ["bike", "hike", "ski", "surf"],
        printActions: function () {
            var _this = this;
            this.actions.forEach(function (action) {
                var str = _this.first + " likes to " + action;
                console.log(str);
            });
        }
    };
    //   person.printActions();
}
  
{
    var person = {
        first: "Pradeep",
        actions: ["bike", "hike", "ski", "surf"],
        printActions: function () {
            this.actions.forEach((action) => {
                var str = this.first + " likes to " + action
                console.log(str)
            })
        }
    };
    // person.printActions();
}

{
    // Using only Current Element
    // array.forEach((currentElement) => { /* ... */ })
    // array.forEach(function (currentElement) { /* ... */ })

    // // Using only Current Element and Index
    // array.forEach((currentElement, index) => { /* ... */ })
    // array.forEach(function (currentElement, index) { /* ... */ })

    // // Using only Current Element, Index and array
    // array.forEach((currentElement, index, array) => { /* ... */ })
    // array.forEach(function (currentElement, index, array) { /* ... */ })

    // // Using all parameters with thisValue (value of this in the callback) 
    // array.forEach((currentElement, index, array) => { /* ... */ }, thisValue)
    // array.forEach(function (currentElement, index, array) { /* ... */ }, thisValue)
}


{
    const staffsDetails = [
        { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
        { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
        { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
        { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
    ];

    staffsDetails.forEach((staffsDetail) => {
        // console.log(`i am ${staffsDetail.name} from royal palace`)
    })
}

{
    // forEach with destructuring
    const staffsDetails = [
        { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
        { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
        { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
        { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
    ];

    staffsDetails.forEach(({ name }) => {
        // console.log(`i am ${name} from royal palace`)
    })
}

{
    // how to use index in forEach method
    const staffsDetails = [
        { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
        { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
        { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
        { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
    ];

    staffsDetails.forEach((staffDetail, index) => {
        let sentence = `index ${index} : I am ${staffDetail.name} a staff of Royal Suites.`;
        // console.log(sentence);
    });
}

{
    const scores = [12, 55, 70, 47];

    let total = 0
    scores.forEach((score) => {
        total += score
    })

    // console.log(total)
}

{
    // forEach loop with condition
    const staffsDetails = [
        { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
        { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
        { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
        { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
    ];

    staffsDetails.forEach(({ name, salary }) => {
        if (salary >= 4000) {
            // console.log(name, salary)
        }
    })
}


{
    // illegal break statement
    // const scores = [12, 55, 70, 47];

    // scores.forEach((score) => {
    //   console.log(score);

    //   if (score === 70) 
    //     // break;  
    // });
}

{
    // const scores = [12, 55, 70, 47];

    // scores.forEach((score) => {
    //     if (score === 70)
    //         continue;

    //     console.log(score);
    // });
}

{
    // break and continue works fine with for loop


    const scores = [12, 55, 70, 47];

    for (i = 0; i < scores.length; i++) {
        // console.log(scores[i]);

        if (scores[i] === 70)
            break;
    }

}

{
    const scores = [12, 55, 70, 47];

    for (i = 0; i < scores.length; i++) {
        if (scores[i] === 70)
            continue;
        // console.log(scores[i]);

    }
}

{
    // Array with Missing elements with for loop. it will return undefined when it will not find missing value
    const studentsScores = [70, , 12, 55, , 70, 47];

    for (let i = 0; i < studentsScores.length; i++) {
        // console.log(studentsScores[i])
    }
}

{
    // but when it comes to forEach method about  missing array elements , it will skip all the missing element of that array and continue prints the available elements from that array
    const studentsScores = [70, , 12, 55, , 70, 47];
    // studentsScores.forEach(score => console.log(score))
}

// Note: Async/Await does not work with the forEach() array method but works with the for loop method.

{
    const ratings = [5, 4, 5];
    let sum = 0;

    // const sumFunction = (a, b) => a + b

    // ratings.forEach((rating) => {
    //     sum = sumFunction(sum, rating)

    // })

    ratings.forEach((rating) => {
        sum += rating
    })
    // console.log(sum)
}

{
    const ratings = [5, 4, 5];
    let sum = 0;

    const sumFunction = async (a, b) => a + b

    ratings.forEach(async (rating) => {
        sum = await sumFunction(sum, rating)

    })

    // console.log(sum)

}

{
    // Converting a for loop to forEach

    // before
    const items = ["item1", "item2", "item3"];
    const copyItems = [];

    // for (let i = 0; i < items.length; i++) {
    //     copyItems.push(items[i])
    // }


    // after
    items.forEach((item) => {
        copyItems.push(item)
    })
    // console.log(copyItems)
}

{
    const logArrayElements = (element, index) => {
        // console.log(`a[${index}] = ${element}`)
    }

    // [3,5,9,,10].forEach(logArrayElements)
}
{
    const holidays = ["chrismasday", "sugar cane", "snow angel", "elves"]
    holidays.forEach((element, index) => {
        // console.log(`${index} : ${element}`)
        // console.log(`${index + 1} : ${element}`) // here (+1) is for starting the index from one not from zero
    })
}


{
    // for each loop under the hood
    const holidays = ["chrismasday", "sugar cane", "snow angel", "elves"]
    function forEach(array, callback) {
        if (typeof callback !== 'function') {
            console.error("callback is not a function")
            return
        }
        for (let i = 0; i < array.length; i++) {
            callback(array[i], i)
        }
    }

    forEach(holidays, function (element, index) {
        // console.log("Holiday at index", index, ":", element);
    })
}

{
    // map function  under the hood
    function myMap(array, callback) {
        if (typeof callback !== 'function') {
            console.error("callback is not function")
            return;
        }
        let returnValue = [];
        for (let i = 0; i < array.length; i++) {
            var newElements = callback(array[i], i + 1)
            returnValue.push(newElements)
        }

        return returnValue
    }

    myMap([45, 67, 76, 90], (element, index) =>{
        console.log("Holiday at index", index, ":", element);
    })

}