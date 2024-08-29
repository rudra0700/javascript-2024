{
  //   console.count() // default : 1
  //   console.count() // default : 2
  //   console.count("hello")
  //   console.count("hello")
  //   console.count("world")
  //   console.count("hello")
  //   console.count("world")
  function sum(a, b) {
    console.count("sum function called");
    return a + b;
  }
  //   const result1 = sum(7,8)
  //   const result2 = sum(3,8)
  //   console.log(result1)
  //   console.log(result2)
}

{
  // console.time("for loop")
  // for (let i = 0; i < 100000; i++) {
  //     //some code
  // }
  // // console.timeLog("for loop")
  // for (let i = 0; i < 100; i++) {
  //     //some code
  // }
  // // console.timeLog("for loop")
  // console.timeEnd("for loop")
}

{
  // console.time("execute function")
  // function sum(a, b) {
  //     return a + b;
  // }
  // const result = sum(3,4)
  // console.log(result)
  // console.timeEnd("execute function")
}

{
  // console.assert(3 === 5, "numbers are not matched")
  // this log only fire if it is false
}

{
  const car1 = {name: "audi", brand: "dx78"}
  const car2 = {name: "mercedes", brand: "pk90"}
  const car3 = {name: "Toyota", brand: "ki65"}
  // console.log(car1, car2, car3)
  // console.table([car1, car2, car3], ["name", "brand"])
  // console.table([car1, car2, car3], ["name"])
  // console.table(car1)
}

{
  // console.group("level 1")
  // console.log("log 1")
  // console.log("log 2")
  // console.groupEnd("level 1")
  // console.groupCollapsed("level 1")
  // console.log("log 1")
  // console.log("log 2")
  // console.groupCollapsed("level 2")
  // console.log("log 3")
  // console.log("log 4")
  // console.groupEnd("level 2")
  // console.groupEnd("level 1")
}

{
  // console.log("%cStop! %cBeing rude",
  // "color: red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold",
  // "color: yellow;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
  // )
}

{
  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  const test = capitalize("rudra");
  //   console.log(test);
}

{
  // const name = "nipa"
  // console.log(name.slice(1, 3))
}
