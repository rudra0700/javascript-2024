{
  // ascending order
  const numbersArr = [3, 10, 4, 21, 5, 9, 2, 6, 5, 3, 5];

  numbersArr.sort((a, b) => {
    return a - b;
  });

  // console.log(numbersArr)
}
{
  // Descending order
  const numbersArr = [3, 10, 4, 21, 5, 9, 2, 6, 5, 3, 5];

  numbersArr.sort((a, b) => b - a);

  // console.log(numbersArr)
}

{
  let numbersArr = [3, 10, 4, 21, 5, 9, 2, 6, 5, 3, 5];

  let sortArr = numbersArr.sort();
  // console.log(sortArr) // this is going to sort incorrectly
}

{
  let numArray = [3, 4, 1, 7, 2];
  let sortedArr = numArray.sort();
  // console.log(sortedArr)
}

{
  // It is also important for you to know that when you apply the sort() method to an array, it will change the position of the elements in the original array. This means you do not need to assign a new variable to the sorted array:/

  let numArray = [3, 4, 1, 7, 2];
  numArray.sort();
  // console.log(numArray)  //chagne the original array
}

{
  // another method of sort
  let numArray = [3, 4, 1, 7, 2].sort();
  // console.log(numArray)
}

{
  // sort an array with comparison function asceding way
  let numArray = [10, 5, 80].sort((a, b) => a - b);
  // console.log(numArray)
}

{
  // How To Sort Strings Accurately

  // For example, the strings "a", "A", and "b" would be sorted as "A", "a", "b" instead of "a", "A", "b", because the uppercase "A" has a lower Unicode code point than the lowercase "a".

  let stringsArr = ["a", "A", "b"].sort();
  // console.log(stringsArr); // Output: ["A","a","b"]
}

{
  // find the lowest Number

  const points = [40, 100, 1, 5, 25, 10];
  points.sort((a, b) => a - b);

  let lowest = points[0];
  // console.log(lowest)
}

{
  const points = [40, 100, 1, 5, 25, 10];

  points.sort((a, b) => a - b);
  let highestValue = points[points.length - 1];
  // console.log(highestValue)
}

{
  let stringsArr = ["a", "A", "b"].sort();
  // console.log(stringsArr); // Output: ["A","a","b"]
}

{
  let stringsArr = ["a", "A", "b"];

  let result = stringsArr.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else {
      return -1;
    }
  });

  // console.log(result);
}

{
  let originalArray = [2, 1, 3];
  // let sortedArr = originalArray.concat().sort() // copy of the original array
  let sortedArr = originalArray.slice().sort((a, b) => a - b); // copy of the original array
  //   console.log(sortedArr)
  //   console.log(originalArray)
}

{
  // sorting array of objects with numerical values
  const response = [
    {
      id: 1,
      name: "John",
      age: 41,
    },
    {
      id: 2,
      name: "Zack",
      age: 35,
    },
    {
      id: 3,
      name: "Peter",
      age: 47,
    },
  ];

  //   console.log(response.sort((a, b) =>{
  //       return b.age - a.age
  //   }))
}

{
  const response = [
    {
      id: 1,
      name: "John",
      age: 41,
    },
    {
      id: 3,
      name: "Peter",
      age: 47,
    },
    {
      id: 2,
      name: "Zack",
      age: 35,
    },
  ];

  //   console.log(
  //     response.sort((a, b) => {
  //       if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
  //         return -1;
  //       } else {
  //         return 1;
  //       }
  //     })
  //   );
}

{
  // ascending order
  const response = [
    {
      id: 1,
      name: "John",
      age: 41,
    },
    {
      id: 2,
      name: "Zack",
      age: 35,
    },
    {
      id: 3,
      name: "Peter",
      age: 47,
    },
  ];

  //   console.log(response.sort((a, b) => {
  //       return a.name.localeCompare(b.name)
  //   }))
}

{
  const response = [
    {
      id: 1,
      name: "John",
      age: 41,
    },
    {
      id: 2,
      name: "Zack",
      age: 35,
    },
    {
      id: 3,
      name: "Peter",
      //   age: 47,
    },
  ];
  //   response.forEach((obj) => console.log(obj));

  //   if (response.every((obj) => "age" in obj)) {
  //     response.sort((a, b) => {
  //       return a.age - b.age;
  //     });
  //   } else {
  //     console.log("Some objects lack the 'age' key. Sorting is not feasible.");
  //   }

  //   if (response.every((obj) => "age" in obj)) {
  //     response.sort((a, b) => a.age - b.age);
  //   } else {
  //     // console.error("Some objects lack the 'age' key. Sorting is not feasible.");
  //   }

  // console.log(response)
}

{
  // Null or undefined values must not be present
  const response = [
    {
      id: 1,
      name: "John",
      age: 41,
    },
    {
      id: 2,
      name: "Zack",
      age: 35,
    },
    {
      id: 3,
      name: "Peter",
      age: 47,
    },
  ];

  response.sort((a, b) => (b.name || "").localeCompare(a.name || "")); // decending order
  response.sort((a, b) => (b.name || "").localeCompare(a.name || "")); // ascending order

  //   console.log(response);
}

{
  const arr = [
    [1, "cherry"],
    [2, "apple"],
    [3, "date"],
    [4, "elderberry"],
    [5, "banana"],
  ];

  const sortedElements = (a, b) => {
    if (a[1] < b[1]) {
      return -1;
    } else {
      return 1;
    }
  };

  const sorted = arr.sort(sortedElements);

  //   console.log(sorted);
}

{
  // sort arrray of objects based on nested array

  const data = [
    { name: "John", hobbies: ["Reading", "dancing"] },
    { name: "Jane", hobbies: ["Cycling", "Singing", "Drawing"] },
    { name: "Bob", hobbies: ["Swimming"] },
    { name: "Alice", hobbies: [] },
  ];

  const sorted = data.sort((a, b) => {
    return a.hobbies.length - b.hobbies.length;
  });

  //   console.log(sorted)
}

{
  const data = [
    { name: "John", hobbies: ["Reading", "dancing"] },
    { name: "Jane", hobbies: ["Cycling", "Singing", "Drawing"] },
    { name: "Bob", hobbies: ["Swimming"] },
    { name: "Alice", hobbies: [] },
  ];

  const sorted = data.sort((a, b) => {
    if (a.hobbies.length < b.hobbies.length) {
      return -1;
    } else if (a.hobbies.length > b.hobbies.length) {
      return 1;
    } else {
      return 0;
    }
  });

  //   console.log(sorted)
}

{
  const items = [
    {
      location: "Nashville, TN",
      description: "Clear",
      current: { temp: 75, wind: 5 },
      temps: [
        { type: "low", value: 68 },
        { type: "high", value: 88 },
      ],
    },
    {
      location: "Prescott, AZ",
      description: "Cloudy",
      current: { temp: 68, wind: 2 },
      temps: [
        { type: "low", value: 66 },
        { type: "high", value: 71 },
      ],
    },
    {
      location: "Searcy, AR",
      description: "Clear",
      current: { temp: 75, wind: 0 },
      temps: [
        { type: "low", value: 73 },
        { type: "high", value: 77 },
      ],
    },
  ];

  const sorted = items.sort((a, b) => a.temps[0].value - b.temps[0].value);
  // console.log(sorted)
}
