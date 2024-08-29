{
  function sum(arr) {
    return arr.reduce((prviousValue, currentValue, currentIndex, arr) => {
      // console.log(prviousValue)
      return prviousValue + currentValue;
    }, 0);
  }

  const result = sum([1, 2, 3, 4, 5, 6]);
  // console.log(result)
}

{
  // use forEach loop to find total price of all fruits
  const items = [
    { name: "Apple", price: 1 },
    { name: "Orange", price: 2 },
    { name: "Mango", price: 3 },
  ];

  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice = totalPrice + item.price;
  });
  //   console.log(totalPrice)
}

{
  // use for loop to find total price of all fruits
  const items = [
    { name: "Apple", price: 1 },
    { name: "Orange", price: 2 },
    { name: "Mango", price: 3 },
  ];
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    let priceOfThings = items[i].price;
    totalPrice = totalPrice + priceOfThings;
  }
  // console.log(totalPrice)
}

{
  const items = [
    { name: "Apple", price: 1 },
    { name: "Orange", price: 2 },
    { name: "Mango", price: 3 },
  ];
  const totalPrice = items.reduce((accumulator, item) => {
    return (accumulator += item.price);
  }, 0);

  // console.log(totalPrice)
}

{
  // how to group similar items together
  const items = [
    { name: "Apple", category: "Fruit" },
    { name: "Onion", category: "Vegetable" },
    { name: "Orange", category: "Fruit" },
    { name: "Lettuce", category: "Vegetable" },
  ];

  const groupItems = items.reduce((accumulator, item) => {
    const catagory = item.category;
    if (!accumulator[catagory]) {
      accumulator[catagory] = [];
    }
    accumulator[catagory].push(item.name);
    return accumulator;
  }, {});

  // console.log(groupItems);
}

{
  // remove the duplicate values
  const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];

  const noDuplicatiions = items.reduce((accumulator, item) => {
    if (!accumulator.includes(item)) {
      accumulator.push(item);
    }
    return accumulator;
  }, []);

  // console.log(noDuplicatiions)
}

{
  //     // full syntax of reduce method
  //    const syntax =  arr.reduce((accumulator, item, index, fullArray) => {
  //         // Do something here
  //     }, accumulatorInitialValue)
}

{
  const numbers = [175, 50, 25];

  const result = numbers.reduce((total, number) => {
    return total - number;
  });

  // console.log(result)
}

{
  const numbers = [175, 50, 25];

  function myFunc(total, number) {
    return total - number;
  }
  // console.log( numbers.reduce(myFunc) )
}

{
  const numbers = [15.5, 2.3, 1.1, 4.7];

  function myFunc(total, number) {
    return (total += Math.round(number));
  }

  // console.log(numbers.reduce(myFunc, 0))
}


