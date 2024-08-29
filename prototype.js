
{
    // To create constructor function you must start the function name with capital letter. And whenever you want to create an instance using this constructor function, you must use new keyword 
    function Car(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.wheel = function () {
            return 4
        }
    }

    const bmw = new Car("BMW", 2024, "Yellow")
    // console.log(bmw.color)
    // console.log(bmw)

}

{
    // composite pattern. it means passing an object/instance into another instance

    function Car(model, year, color, owner) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.owner = owner
        this.wheel = function () {
            return 4
        }
    }


    function Owner(name, age) {
        this.name = name;
        this.age = age;

    }

    const rudraOwner = new Owner("rudra", 24)
    // const bmw = new Car("BMW", 2024, "Yellow", rudraOwner)

    rudraOwner.age = 48 // this is going to change the age because rudraOwner is pass by reference
    const bmw = new Car("BMW", 2024, "Yellow", rudraOwner)

    // console.log(bmw)
}

{
    // prototype concepts

    // protype is a internal property of an Object which indicates from which this particular object has been created

    function Car(model, year, color, owner) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.owner = owner
        this.wheel = function () {
            return 4
        }
    }
    const bmw = new Car("BMW", 2024, "Yellow", {})
    // console.log(bmw)

    const user = {}
    user.toString() // its pretty much allowed because toString method is available into its prototype
    // console.log(user)

    // console.log(
    //     bmw.toString()

    // )
}

{

    function Car(model, year, color, owner) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.owner = owner
        this.wheel = function () {
            return 4
        }
    }

    const bmw = new Car("BMW", 2024, "Yellow", {})
    // console.log(bmw)
    // console.log(Car.prototype)
}

{
    // insert static property inside prototype
    function Car(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }

    Car.prototype.wheelNumber = function () {
        return 4
    }
    const bmw = new Car("bmw", 2024, "blue")
    // console.log(bmw.wheelNumber())
}

{
    // function constructor with class keyword
    class Car {
        constructor(model, year, color, owner) {
            this.model = model;
            this.year = year;
            this.color = color;
            this.owner = owner;
        }

        wheelNumber() {
            return 4
        }
    }

    const bmw = new Car("bmw", 2024, "blue", {})
    // console.log(bmw.wheelNumber())
}

{
    // using extend keyword
    class Car {
        constructor(model, year, color, owner) {
            this.model = model;
            this.year = year;
            this.color = color;
            this.owner = owner;
        }

        wheelNumber() {
            return 4
        }
    }

    class LuxeryCar extends Car {
        constructor(model) {
            super(model)
            
        }

        isLuxery() {
            return true
        }
    }

    const Lc = new LuxeryCar(2024)
    // console.log(Lc)
}

{
    // Object.create method
    const vehicle = {
        isLuxery: false,
        isFourWheeler: false,

        showInfo: function () {
            return `The vehicle ${this.name} is of ${this.color}.Is it a luxery car? ${this.isLuxery}. Does it have 4 wheel? ${this.isFourWheeler}`
        }
    }

    const car = Object.create(vehicle)
    // console.log(car)
    car.name = "tesla"
    car.color = "blue"
    car.isLuxery = true // this line is overridden 
    car.isFourWheeler = true // this line is overridden
    // console.log(car.showInfo())
}

{
    // adding a additional property which is not available in prototype object (parent object) but need to use at child object created by its prototype object (parent object)

    const vehicle = {
        isLuxery: false,
        isFourWheeler: false,

        showInfo: function () {
            return `The vehicle ${this.name} is of ${this.color}.Is it a luxery car? ${this.isLuxery}. Does it have 4 wheel? ${this.isFourWheeler}`
        }
    }

    const car = Object.create(vehicle, { headlight: { value: 4 } })
    // console.log(car.headlight)

}

{
    // How can we get the prototype of an object programmatically? Its possible to have millions of object .Here is the two way
    function Car(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }

    const bmw = new Car("bmw", 2023, "steel")
    // console.log(bmw.__proto__) // Avoid this method. it can be depricated anytime
    // console.log(Object.getPrototypeOf(bmw)) // rather use this method

}

{
    // we can also set the prototype of an object
    function Car(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
    const bmw = new Car("bmw", 2023, "steel")
    Object.setPrototypeOf(bmw, {}) // empty object means javascript by default object
    // console.log(Object.getPrototypeOf(bmw))

}

// freecodeCamp reference

{
    let animal = {};
    animal.name = 'leo';
    animal.energy = 10;

    animal.eat = function (amount) {
        // console.log(`${this.name} is eating`);
        this.energy += amount
        return this.energy
    }

    animal.sleep = function (amount) {
        // console.log(`${this.name} is sleeping`);
        this.energy += amount;
        return this.energy
    }
    animal.play = function (amount) {
        // console.log(`${this.name} is playing`);
        this.energy -= amount;
        return this.energy;
    }

    // console.log(animal.play(45))
}

{

    // function instantiation

    // this time we pass the name of the animal name dynamically using function
    function Animal(name, energy) {

        let animal = {};
        animal.name = name;
        animal.energy = energy;

        animal.eat = function (amount) {
            // console.log(`${this.name} is eating`);
            this.energy += amount
            return this.energy
        }

        animal.sleep = function (amount) {
            // console.log(`${this.name} is sleeping`);
            this.energy += amount;
            return energy
        }
        animal.play = function (amount) {
            // console.log(`${this.name} is playing`);
            this.energy -= amount;
            return this.energy;
        }

        return animal;

    }

    const leo = Animal("leo", 50)
    const snoop = Animal("snoop", 0)

    // console.log(leo)
    // console.log(snoop)

}

{
    // Functional Instantiation with Shared Methods

    const animalMethods = {
        eat(amount) {
            // console.log(`${this.name} is eating`);
            this.energy += amount
        },
        sleep(length) {
            // console.log(`${this.name} is eating`);
            this.energy += length
        },
        play(length) {
            // console.log(`${this.name} is eating`);
            this.energy -= length
        },
    }

    function Animal(name, energy,) {
        let animal = {}
        animal.name = name
        animal.energy = energy
        animal.eat = animalMethods.eat
        animal.sleep = animalMethods.sleep
        animal.play = animalMethods.play
        return animal;
    }

    const leo = Animal("leo", 10)
    // console.log(leo)

}


{
    // Functional Instantiation with Shared Methods and Object.create
    const animalMethods = {
        eat(amount) {
            // console.log(`${this.name} is eating.`)
            this.energy += amount

        },
        sleep(length) {
            // console.log(`${this.name} is sleeping.`)
            this.energy += length;

        },
        play(length) {
            // console.log(`${this.name} is playing.`)
            this.energy -= length

        }
    }

    function Animal(name, energy) {
        let animal = Object.create(animalMethods)
        animal.name = name
        animal.energy = energy

        return animal
    }

    const leo = Animal('Leo', 7)


    // leo.eat(10)
    // console.log(leo)
}

{
    function doingThings() {

    }

    // console.log(doingThings.prototype)
}

{
    // Prototypal Instantiation

    function Animal(name, energy) {
        let animal = Object.create(Animal.prototype);
        animal.name = name;
        animal.energy = energy;
        return animal;
    }

    Animal.prototype.eat = function (amount) {
        // console.log(`${this.name} is eating`);
        this.energy += amount;
    }
    Animal.prototype.sleep = function (length) {
        // console.log(`${this.name} is eating`);
        this.energy += length;
    }
    Animal.prototype.play = function (length) {
        // console.log(`${this.name} is eating`);
        this.energy += length;
    }

    const leo = Animal("leo", 10);
    // leo.play(5)
    // console.log(leo)
}

{
    // what is javascript (new) keyword does under the hood
    function Animal(name, energy) {
        // const this = Object.create(Animal.prototype)

        this.name = name;
        this.energy = energy;

        // return this;
    }

    const leo = new Animal("leo", 10);
    // console.log(leo) 
}

{
    // and without the "under the hood" comments
    function Animal(name, energy) {
        this.name = name;
        this.energy = energy;

        Animal.prototype.eat = function (amount) {
            // console.log(`${this.name} is eating`);
            this.energy += amount
        }
        Animal.prototype.sleep = function (length) {
            // console.log(`${this.name} is sleeping`);
            this.energy += length;
        }
        Animal.prototype.playing = function (length) {
            // console.log(`${this.name} is playing`);
            this.energy += length;
        }
    };

    const leo = new Animal("leo", 40);
    // leo.eat(10);
    // console.log(leo);
}

{
    // without new keyword this object will not be create.The name for this pattern is Pseudoclassical Instantiation.
    function Animal(name, energy) {
        this.name = name
        this.energy = energy
    }

    const leo = Animal('Leo', 7)
    //   console.log(leo) // undefined
}

{
    // with class constructor

    class Animal {
        constructor(name, energy) {
            this.name = name;
            this.energy = energy
        }

        eat(amount) {
            // console.log(`${this.name} is eating`);
            this.energy += amount;
        };
        sleep(length) {
            // console.log(`${this.name} is eating`);
            this.energy += length;
        };
        play(length) {
            // console.log(`${this.name} is eating`);
            this.energy += length;
        };
    }

    const leo = new Animal("leo", 7)
    // console.log(leo);
}

{
    // syntectic sugar of Array
    const friendsWithSugar = []

    const friendsWithoutSugar = new Array()

    // console.log(Array.prototype) // all array built in method  restored in array.prototype

    // The exact same logic exists for Objects as well. Alls object will delegate to Object.prototype on failed lookups which is why all objects have methods like toString and hasOwnProperty.

}

{
    // nextToEat 

    // However, what if we had a method that was important to the Class, but didn't need to be shared across instances
    class Animal {
        constructor(name, energy) {
            this.name = name
            this.energy = energy
        }
        eat(amount) {
            console.log(`${this.name} is eating.`)
            this.energy += amount
        }
        sleep(length) {
            console.log(`${this.name} is sleeping.`)
            this.energy += length
        }
        play(length) {
            console.log(`${this.name} is playing.`)
            this.energy -= length
        }
    }


    function nextToEat(animals) {
        const sortByLeastEnergy = animals.sort((a, b) => {
            return a.energy - b.energy;
        })
        return sortByLeastEnergy[0].name;
    }
    const leo = new Animal('Leo', 7)
    const snoop = new Animal('Snoop', 10)

    // console.log(leo);

    // console.log(nextToEat([leo, snoop]))
}

{
    // Now, because we added nextToEat as a static property on the class, it lives on the Animal class itself (not its prototype) and can be accessed using Animal.nextToEat.

    class Animal {
        constructor(name, energy) {
            this.name = name
            this.energy = energy
        }
        eat(amount) {
            console.log(`${this.name} is eating.`)
            this.energy += amount
        }
        sleep(length) {
            console.log(`${this.name} is sleeping.`)
            this.energy += length
        }
        play(length) {
            console.log(`${this.name} is playing.`)
            this.energy -= length
        }
        static nextToEat(animals) {
            const sortByLeastEnergy = animals.sort((a, b) => {
                return a.energy - b.energy;
            })
            return sortByLeastEnergy[0].name;
        }
    }


    const leo = new Animal('Leo', 7)
    const snoop = new Animal('Snoop', 10)

    // console.log(Animal.nextToEat([leo, snoop]))
    // console.log(leo)
}


{
    // Doing the same thing with ES5
    function Animal(name, energy) {
        this.name = name
        this.energy = energy
    }

    Animal.prototype.eat = function (amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    }

    Animal.prototype.sleep = function (length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    }

    Animal.prototype.play = function (length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }

    Animal.nextToEat = function (animals) {
        const sortedByLeastEnergy = animals.sort((a, b) => {
            return a.energy - b.energy
        })

        return sortedByLeastEnergy[0].name
    }

    const leo = new Animal('Leo', 7)
    const snoop = new Animal('Snoop', 10)

    // console.log(Animal.nextToEat([leo, snoop])) // Leo

    // get prototype 
    const prototype = Object.getPrototypeOf(leo)
    //    console.log(prototype === Animal.prototype) // its true

}

{
    // find the original constructor of an instance
    function Animal(name, energy) {
        this.name = name
        this.energy = energy
    }

    Animal.prototype.eat = function (amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    }

    Animal.prototype.sleep = function (length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    }

    Animal.prototype.play = function (length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }

    const leo = new Animal('Leo', 7)
    //   console.log(leo)

    // for (let key in leo) {
    //     if (leo.hasOwnProperty(key)) {

    //         console.log(`Key: ${key}. Value: ${leo[key]}`)
    //     }
    // }

    let tests = Object.keys(leo);
    // tests.forEach((key) =>{
    //     console.log(leo[key])
    // })

    // console.log(tests)

    // for(let i in tests){
    //     console.log()
    // }

    

    // for (const test of tests) {
    //     console.log(leo[test])
    // }
}

{
    function Animal(name, energy) {
        this.name = name
        this.energy = energy
    }

    Animal.prototype.eat = function (amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    }

    Animal.prototype.sleep = function (length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    }

    Animal.prototype.play = function (length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }

    const leo = new Animal('Leo', 7)

    leo.hasOwnProperty('name') // true
    leo.hasOwnProperty('energy') // true
    leo.hasOwnProperty('eat') // false
    leo.hasOwnProperty('sleep') // false
    leo.hasOwnProperty('play') // false
}

{
    // Check if an object is an instance of a Class
    function Animal(name, energy) {
        this.name = name
        this.energy = energy
    }

    function User() { }

    const leo = new Animal('Leo', 7)

    leo instanceof Animal // true
    leo instanceof User // false
}


{
    function Animal(name, energy) {
        this.name = name;
        this.energy = energy;
        if (this instanceof Animal === false) {
            console.log("forgot to call the instance with new keyword")
        }
    }


    const leo = new Animal("leo", 7)
    // console.log(leo)
}

{
    // Now instead of just logging a warning to the consumer of the function, what if we re-invoke the function, but with the new keyword this time?

    function Animal(name, energy) {
        this.name = name;
        this.energy = energy;
        if (this instanceof Animal === false) {
            return new Animal(name, energy)
        }
    }


    const leo = Animal("leo", 7)
    // console.log(leo)
}

{
    Object.create = function (objToDelegateTo) {
        function Fn(){}
        Fn.prototype = objToDelegateTo
        return new Fn()
      }

}




