{
    // Those two block of code are same

    // const person = {
    //     firstName: "John",
    //     lastName : "Doe",
    //     id       : 5566,
    //     fullName : function() {
    //       return this.firstName + " " + this.lastName;
    //     }
    //   };

    const person = {}
    person.firstName = "John"
    person.lastName = "Doe"
    person.id = 5588
    person.fullName = function () {
        return person.firstName + " " + person.lastName
    }

    // console.log(person.fullName())
}

{
    // implicit binding
    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },
        getFullName: function () {
            return this.fullName()
        }
    };

    // console.log(person.getFullName())

}

{
    // explicit binding
    const person1 = {
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };
    const person2 = {
        firstName: "John",
        lastName: "Doe"
    }

    // console.log(person1.fullName.call(person2))

}



{
    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        getThis: function () {
            return this;
        }
    };

    // console.log('this in object method', person.getThis());
}

{
    // A note about arrow functions
    const show = () => this

    // console.log('arrow function this', show())  // going to return window object


    // but we can not access it with arrow function
    const person = {
        name: 'Pedro',
        surname: 'Sanchez',
        sayName: () => this.name + ' ' + this.surname
    }

    // console.log(person.sayName());  //undefined
}

{
    // document.getElementById('testBtn').addEventListener('click', function() {
    //     console.log('this in a event', this);
    // })
}

{

    // call method
    const person1 = {
        name: 'Pedro',
        surname: 'Sanchez',
        sayName: function (city, country) {
            return this.name + " " + this.surname + ", " + city + ", " + country;
        }
    }

    const person2 = {
        name: 'Jimena',
        surname: 'Juarez'
    }

    // console.log(person1.sayName.call(person2, "DF", "Mexico"));
}

{
    // The apply method works very similarly to call. The only difference between them is that call accepts parameters as a list separated by comma (as the last example we saw), and apply accepts them as an array.
    const person1 = {
        name: 'Pedro',
        surname: 'Sanchez',
        sayName: function (city, country) {
            return this.name + " " + this.surname + ", " + city + ", " + country;
        }
    }

    const person2 = {
        name: 'Jimena',
        surname: 'Juarez'
    }

    // console.log(person1.sayName.apply(person2, ["DF", "Mexico"]));
}

{
    // bind method
    // Same as call and apply , the bind method indicates the object to which the (this keyword) will refer when a given method executes.
    // But the difference with bind is that it will return a new function, without executing it. While with call and apply the function executed right away, using bind we must execute it separately.


    const person1 = {
        name: 'Pedro',
        surname: 'Sanchez',
        sayName: function () {
            return this.name + " " + this.surname
        }
    }

    const person2 = {
        name: 'Jimena',
        surname: 'Juarez'
    }
    const result = person1.sayName.bind(person2)
    // console.log(result())
}
