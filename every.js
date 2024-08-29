{
  const ages = [32, 33, 18, 40];

  function checkAge(age) {
    return age > 18;
  }
  // const result = ages.filter(checkAge)
  // console.log(result)
  // console.log(ages.every(checkAge)) // if all the element of array is not above 18 it will return false. condition must be true for every array element
}

{
  const ages = [32, 33, 18, 40].every((checkAge) => {
    return checkAge > 18;
  });

  // console.log(ages)
}

{
  const nums = [34, 2, 48, 91, 12, 32];

  function test(num) {
    return num < 100;
  }

  // const result = nums.every(test)
  // console.log(result)
}

{
  // The every() method does not change the original array. it returns boolean value

  let tshirts = [
    { size: "S", color: "black", logo: "freeCodeCamp" },
    { size: "S", color: "white", logo: "freeCodeCamp" },
    { size: "S", color: "teal", logo: "freeCodeCamp" },
    { size: "M", color: "black", logo: "freeCodeCamp" },
    { size: "M", color: "white", logo: "freeCodeCamp" },
    { size: "M", color: "teal", logo: "freeCodeCamp" },
    { size: "L", color: "black", logo: "freeCodeCamp" },
    { size: "L", color: "white", logo: "freeCodeCamp" },
    { size: "L", color: "teal", logo: "freeCodeCamp" },
  ];

  const test = tshirts.every((item, i, arr) => {
    // console.log(item)
    // console.log(i)
    // return item.logo === "freeCodeCamp"
    // return true;
  });

  // console.log(test)
}

{
  // The some() method does not change the original array. it returns boolean value
  // if one condtion is true, it will return true boolean

  let tshirts = [
    { size: "S", color: "black", logo: "freeCodeCamp" },
    { size: "S", color: "white", logo: "freeCodeCa" },
    { size: "S", color: "teal", logo: "freeCodeCa" },
    { size: "M", color: "black", logo: "freeCodeCa" },
    { size: "M", color: "white", logo: "freeCodeCa" },
    { size: "M", color: "teal", logo: "freeCodeCa" },
    { size: "L", color: "black", logo: "freeCodeCa" },
    { size: "L", color: "white", logo: "freeCodeCa" },
    { size: "L", color: "teal", logo: "freeCodeCa" },
  ];

  const test = tshirts.some((item, i, arr) => {
    // console.log(item)
    // console.log(i)
    return item.logo === "freeCodeCamp";
  });

  // console.log(test)
}

{
  const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];

  // function isCherries(fruit) {
  //   return fruit.name === "cherries";
  // }
  //   console.log(inventory.find(isCherries))

  const test = inventory.find((fruit) => {
    return fruit.name === "cherries";
  });
  // console.log(test);
}
{
  // using arrow function and destructuring
  const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];

  //   console.log(inventory.find(({name}) => name === "cherries"))
}
