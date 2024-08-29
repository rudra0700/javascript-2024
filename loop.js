
// In JavaScript, when you hear the term "loop", you probably think of using the various loop methods like for loops, forEach(), map() and others.

// But in the case of objects, unfortunately, these methods don't work because objects are not iterable.

{
    // let obj = { name: "rudra", age: 24 }

    // obj.forEach(element => {
    //     // console.log(element) // this line is going to throw an error
    // });
}

{
    let arr = [24, 33, 77];
    // arr.forEach(val => console.log(val -2))
}

{
    let arr = [24, 33, 77];
    for (val of arr) {
        // console.log(val * 2)
    }
}


{
    // iterate through an Object
    const population = {
        male: 4,
        female: 93,
        others: 10
    };

    for (const key in population) {
        if (population.hasOwnProperty(key)) {
            // console.log(`${key} : ${population[key]}`)
        }
    }

}

// We have three object static methods, which are:

// Object.keys()
// Object.values()
// Object.entries()

{

    // How to loop through an object in JavaScript with the Object.keys() method
    const population = {
        male: 4,
        female: 93,
        others: 10
    };
    let genders = Object.keys(population)

    // genders.forEach(gender => console.log(gender))

}

{
    const population = {
        male: 4,
        female: 93,
        others: 10
    };

    let genders = Object.keys(population)

    // genders.forEach(gender => console.log(`There is ${population[gender]} ${gender}`))

}

{
    // looping through population and sum the population
    const population = {
        male: 4,
        female: 93,
        others: 10
    };
    let totalPopulation = 0;
    let genders = Object.keys(population)
    genders.forEach((gender) => {
        totalPopulation += population[gender]
        // console.log(totalPopulation)
    })
}

{
    // How to loop through an object in JavaScript with the Object.values() method
    const population = {
        male: 4,
        female: 93,
        others: 10
    };

    let numbers = Object.values(population)
    numbers.forEach(number => {
        // console.log(number)
    });
}

{
    const population = {
        male: 4,
        female: 93,
        others: 10
    };


    let totalPopulation = 0;
    let numbers = Object.values(population);
    numbers.forEach((number) => {
        totalPopulation += number;
    })

    // console.log(totalPopulation); 
}


{
    // How to loop through an object in JavaScript with the Object.entries() method
    const population = {
        male: 4,
        female: 93,
        others: 10
    };

    let populationArr = Object.entries(population);


    for (array of populationArr) {
        // console.log(array);
    }

}

{
    const population = {
        male: 4,
        female: 93,
        others: 10
    };
    let populationArr = Object.entries(population);

    for (const [key, value] of populationArr) {
        if (key === 'male') {
            // console.log(key, value);
            break;
        }

    }

}

{
    // do while loop. loops body execute at least once
    const scores = [22, 54, 76, 92, 43, 33];
    let i = 0;
    do {
        // console.log(scores[i])
        i++;
    } while (i < scores.length)
}

{
    const scores = [22, 54, 76, 92, 43, 33];
    let i = 6;
    do {
        //    console.log(scores[i])
        i++;
    } while (i < scores.length)
}

{
    const scores = [22, 54, 76, 92, 43, 33];
    let i = 6;
    while (i < scores.length) {
        // console.log(scores[i])
        i++;
    }
}

{
    // for in loops in an array
    const scores = [22, 54, 76, 92, 43, 33];
    for (i in scores) {
        // console.log(scores[i])
    }
}

{
    const scores = [22, 54, 76, 92, 43, 33];

    for (score of scores) {
        console.log(score)
    }
}


// Summary
// With these array methods, you don't need to use a for loop to search an array. Depending on what you need, you can decide which of the methods is best suited for your use case.

// Here is a summary of when to use each method:

// Use filter if you want to find all items in an array that meet a specific condition.
// Use find if you want to check if that at least one item meets a specific condition.
// Use includes if you want to check if an array contains a particular value.
// Use indexOf if you want to find the index of a particular item in an array.

{
    const array = [10, 11, 3, 20, 5];

    const test = array.find(elm => elm >= 10)
    // console.log(test)
}

{
    const array = [10, 11, 3, 20, 10];

    const includesTenTwice = array.includes(10, 0);

    // console.log(includesTenTwice)
}

{
    const array = [10, 11, 3, 20, 5];

    const indexOfThree = array.indexOf(1);

    // console.log(indexOfThree)//2
}

// we can use for of loop both in stirng and array but not in Object
