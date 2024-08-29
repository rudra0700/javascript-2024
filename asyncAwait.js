async function fetchUserDetails() {
  //  we pretend to be like fetch some data from API or from backend server

  return { name: "john", profession: "programmer" };
}

// we cannot use await with regular function like that

// const user = await fetchUserDetails()
// console.log(user)

// instead we will use in this below way
async function caller() {
  const user = await fetchUserDetails();
  console.log(user);
}

// caller()

{
  // we can also use regular function, not has to be async function all the time
  // function getHi() {
  //   return "hi";
  // }
  // async function test() {
  //   const message = await getHi();
  //   console.log(message);
  // }
  // test()
}

{
  const validateUser = ({ userId, password }) => {
    return new Promise((resolve, reject) => {
      if (userId && password) {
        resolve("Authenticated");
      } else {
        reject({ message: "Give the right information" });
      }
    });
  };

  const app = async () => {
    const data = {
      userId: "test",
      password: "1234",
    };

    try {
      const user = await validateUser(data);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  app();
}



// {
//   // pizzahub exercise

//   //   1. Fetch the Nearby Pizza Shop

//   const fetchByNearShop = ({ longitude, latitude }) => {
//     console.log(`Locating the nearby shop at ${longitude} ${latitude}`);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const response = {
//           shopId: "s-123",
//         };
//         resolve(response.shopId);
//       }, 1000);
//     });
//   };

//   //  2. Fetch pizzas in the shop
//   const fetchAvailablePizzas = ({ shopId }) => {
//     console.log(`Getting pizza list from the shop ${shopId}`);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const response = {
//           pizzas: [
//             {
//               type: "veg",
//               name: "margarita",
//               id: "pv-123",
//             },
//             {
//               type: "nonveg",
//               name: "pepperoni slice",
//               id: "pnv-124",
//             },
//           ],
//         };
//         resolve(response);
//       }, 1000);
//     });
//   };

//   // Check the Availability of the Selected Pizza
//   let getMyPizza = (result, type, name) => {
//     let pizzas = result.pizzas;
//     console.log(`Got the pizza lists - ${pizzas}`);

//     let myPizza = pizzas.find((pizza) => {
//       return pizza.type === type && pizza.name === name;
//     });
//     return new Promise((resolve, reject) => {
//       if (myPizza) {
//         console.log(`✔️ Found the Customer Pizza ${myPizza.name}!`);
//         resolve(myPizza);
//       } else {
//         reject(
//           new Error(
//             `❌ Sorry, we don't have ${type} ${name} pizza. Do you want anything else?`
//           )
//         );
//       }
//     });
//   };

//   // Fetch the Complimentary Beverage
//   const fetchBeverages = ({ pizzaId }) => {
//     console.log(`🧃 Getting Beverages for the pizza ${pizzaId}...`);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const response = {
//           id: "b-10",
//           name: "cola",
//         };
//         resolve(response);
//       }, 1000);
//     });
//   };

//   // Create the Order
//   let createOrder = (endpoint, payload) => {
//     if (endpoint.includes(`/api/pizzahub/order`)) {
//       console.log("Placing the pizza order with...", payload);
//       const { type, name, beverage } = payload;
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve({
//             success: true,
//             message: `🍕 The ${type} ${name} pizza order with ${beverage} has been placed successfully.`,
//           });
//         });
//       });
//     }
//   };

//   // Combine All the Fetches in a Single Place
//   function fetch(endpoint, payload) {
//     if (endpoint.includes("/api/pizzahub/shop")) {
//       return fetchByNearShop(payload);
//     } else if (endpoint.includes("/api/pizzahub/pizza")) {
//       return fetchAvailablePizzas(payload);
//     } else if (endpoint.includes("/api/pizzahub/beverages")) {
//       return fetchBeverages(payload);
//     }
//   }

//   // Handle Promises with the Chain
//   function orderPizza(type, name) {
//     fetch("/api/pizzahub/shop", { longitude: 38.8951, latitude: -77.0364 })
//       .then((shopId) => fetch("/api/pizzahub/pizza", { shopId: shopId }))
//       .then((allPizzas) => getMyPizza(allPizzas, type, name))
//       .then((pizza) => fetch("/api/pizzahub/beverages", { pizzaId: pizza.id }))
//       .then((beverage) =>
//         createOrder("/api/pizzahub/order", {
//           beverage: beverage.name,
//           name: name,
//           type: type,
//         })
//       )
//       .then((result) => console.log(result.message))
//       .catch(function (error) {
//         console.error(`${error.message}`);
//       });
//   }

//   //order pizza
//   orderPizza("nonveg", "pepperoni slice");
// }

 ;
