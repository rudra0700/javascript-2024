{
  let users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 47, occupation: "programmer" },
    { name: "Albert", age: 76, occupation: "programmer" },
  ];

  let filterdUser = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age > 40 && users[i].occupation === "programmer") {
      filterdUser.push(users[i]);
    }

    // console.log(filterdUser);
  }
}

{
  let users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 47, occupation: "programmer" },
    { name: "Albert", age: 76, occupation: "programmer" },
  ];

  let filterdUser = users.filter((user) => {
    return user.age > 40 && user.occupation === "programmer";
  });

  // console.log(filterdUser)

  // console.log(users) // filter method does not change the original array
}

{
  let users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 47, occupation: "programmer" },
    { name: "Albert", age: 76, occupation: "programmer" },
  ];

  let filterdUserName = users
    .filter((user) => user.age > 40 && user.occupation === "programmer")
    .sort((a, b) => a.age - b.age)
    .map((user) => user.name);
  // console.log(filterdUserName)
}

{
  const userDetails = {
    firstName: "Jane",
    lastName: "Daniels",
    userName: "jane.daniels",
    email: "jane.daniels@example.com",
    comapny: "Example Inc.",
    address: "1234 Example Street",
    age: 25,
    hobby: "Singing",
  };
  let keysArray = Object.keys(userDetails);
  console.log(keysArray);
  let filterdKeys = keysArray.filter((key) => key.length < 5);
  //   console.log(filterdKeys)
}
{
  let people = [
    { name: "aaron", age: 65 },
    { name: "beth", age: 2 },
    { name: "cara", age: 13 },
    { name: "daniel", age: 3 },
    { name: "ella", age: 25 },
    { name: "fin", age: 1 },
    { name: "george", age: 43 },
  ];

  const result = people.filter((person) => person.age <= 3);
}

{
  let team = [
    {
      name: "aaron",
      position: "developer",
    },
    {
      name: "beth",
      position: "ui designer",
    },
    {
      name: "cara",
      position: "developer",
    },
    {
      name: "daniel",
      position: "content manager",
    },
    {
      name: "ella",
      position: "cto",
    },
    {
      name: "fin",
      position: "backend engineer",
    },
    {
      name: "george",
      position: "developer",
    },
  ];

  let developers = team.filter((developer) => {
    return developer.position === "developer";
  });

  // console.log(developers)
}

{
  let team = [
    {
      name: "aaron",
      position: "developer",
    },
    {
      name: "beth",
      position: "ui designer",
    },
    {
      name: "cara",
      position: "developer",
    },
    {
      name: "daniel",
      position: "content manager",
    },
    {
      name: "ella",
      position: "cto",
    },
    {
      name: "fin",
      position: "backend engineer",
    },
    {
      name: "george",
      position: "developer",
    },
  ];

  let developers = team.filter((developer) => {
    return developer.position != "developer";
  });
  //   console.l og(developers)
}

{
  // filter() Example 3: How to access the index property
  let winners = ["Anna", "Beth", "Cara"];

  let gold = winners.filter((winner, index) => index === 0);
  let bronze = winners.filter((winner, index) => index === 1);
  let silver = winners.filter((winner, index) => index === 2);

  // console.log(`Gold winner is ${gold}, Bronze winner is ${bronze}, Silver winner is ${silver}`)
}

{
  let competitors = ["Anna", "Beth", "Cara", "David"];
  function displayWinners(name, index, array) {
    let isNextItem = index + 1 < array.length ? true : false;
    if (isNextItem) {
      //   console.log(`The No${index + 1} winner is ${name}.`);
    } else {
      //   console.log(`Sorry, ${name} is not one of the winners.`)
    }
  }
  let result = competitors.filter((name, index, array) =>
    displayWinners(name, index, array)
  );
//   console.log(result);
}

{
  // filter() Example 5: How to access the context object with this

  let people = [
    { name: "aaron", age: 65 },
    { name: "beth", age: 15 },
    { name: "cara", age: 13 },
    { name: "daniel", age: 3 },
    { name: "ella", age: 25 },
    { name: "fin", age: 16 },
    { name: "george", age: 18 },
  ];

  let range = {
    lower: 13,
    upper: 16,
  };

  let teenagers = people.filter(function (person) {
    return person.age >= this.lower && person.age <= this.upper;
  }, range);

//   console.log(teenagers)
}

{
  function isBigEnough(value) {
    return value >= 10;
  }

  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // console.log(filtered)
}

{
  const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
  ];

  let invalidEntries = 0;
  function filterById(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true;
    }
    invalidEntries++;

    return false;
  }

  const arrId = arr.filter(filterById);
  // console.log(invalidEntries)
}

{
  const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
  ];

  let arrId = arr.filter((item) => {
    // let invalidEntries = 0;
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true;
    } else {
      return false;
    }
    // invalidEntries++;
  });

  // console.log(arrId)
}

{
  // Searching in array
  const fruits = ["apple", "banana", "grapes", "mango", "orange"];
  function filterItems(arr, query) {
    return arr.filter((element) =>
      element.toLowerCase().includes(query.toLowerCase())
    );
  }

  // console.log(filterItems(fruits, "ap"))
  // console.log(filterItems(fruits, "an"))
}
