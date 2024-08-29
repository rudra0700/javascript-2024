{
  let arr1 = [1, 2, 3];
  // console.log(arr1)
  let test = arr1.slice();
  // console.log(test)
}

{
  // its a shallow copy
  let numbers = [1, 2, 3];
  let numbersCopy = [...numbers];
  numbersCopy.push(4);
  // console.log(numbersCopy, numbers)
}

{
  let numbers = [[1], [2]];
  let numbersCopy = [...numbers];
  //   console.log(numbersCopy);

  numbersCopy[0].push(300);
  //   console.log(numbersCopy);
}

{
  let numbers = [1, 2, 3];
  numbersCopy = [];

  for (let i = 0; i < numbers.length; i++) {
    numbersCopy[i] = numbers[i];
  }
  //   console.log(numbersCopy, numbers)
}

{
  let numbers = [1, 2, 3];
  numbersCopy = [];

  if (numbers === numbersCopy) {
    // console.log("this is ok")
  } else {
    // console.log("THIS IS NOT OK")
  }
}

{
  //     numbers = [1,2,3]
  //     const double = (x) =>{
  //         return x * 2
  //     }
  //    let result =  numbers.map(double)
  //    console.log(result)

  let numbers = [1, 2, 3];
  let result = numbers.map((x) => {
    return x * 2;
  });
  // console.log(result);
}

{
  let numbers = [1, 2, 3];
  let result = numbers.map((x) => x);
  // console.log(result)
}

{
  let numbers = [1, 2, 3];
//   let result = numbers.forEach((x) => console.log(x));
//   console.log(result);
}

// JSON.stringify turns an object into a string.

// JSON.parse turns a string into an object.
// it returns a deep copy of an array

{
  nestedNumbers = [[1], [2]];
  numbersCopy = JSON.parse(JSON.stringify(nestedNumbers));
//   console.log(numbersCopy)

  numbersCopy[0].push(4);
//   console.log(numbersCopy, nestedNumbers)
}

{
  let numbers = [1, 2, 3];
  let result1 = numbers.concat();
  let result2 = numbers.concat([]);
//   console.log(result1)
//   console.log(result2)
}

{
  let myObject = { name: "John", age: 30, city: "New York" };
  // console.log(myObject["name"])
}
