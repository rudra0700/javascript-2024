function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function main() {
  console.log("main");
  setTimeout(f1, 0);

  new Promise(function (resolve, reject) {
    resolve("i am resolved");
  }).then((result) => console.log(result));

  f2();
}

// main()

// {
//     function f1() {
//         console.log('f1');
//     }

//     function f2() {
//         console.log('f2');
//     }

//     function f3() {
//         console.log('f3');
//     }

//     function f4() {
//         console.log('f4');
//     }

//     console.log("Let's do it!");

//     setTimeout(function() {f1();}, 0);

//     f4();

//     setTimeout(function() {f2();}, 5000);

//     setTimeout(function() {f3();}, 3000);
// }

//promise resolve
{
  let promise = new Promise((resolve, reject) => {
    let value = "water";
    resolve(value);
  });

  const grandParentsCooking = () => {
    promise.then((result) => console.log(`cooking with ${result}`));
  };

  // grandParentsCooking()
}

{
  // promise rejection

  // let promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //         reject(new Error("There is something wrong..."))
  //     }, 2000)
  // })

  const grandParentsCooking = () => {
    promise.catch((error) => console.log(`OMG! ${error.message}`));
  };

  // grandParentsCooking()
}

// {
//     // then and catch combine
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // reject(new Error("There is something wrong..."))
//             resolve("water")
//         }, 2000)
//     })

//     const grandParentsCooking = () => {
//         promise
//             .then((result) => {
//                 console.log(`cooking with ${result}`)
//             }).
//             catch((error) => {
//                 console.log(`OMG! ${error}`)
//             })
//     }

//     // grandParentsCooking()
// }

// {
//     // Promise chain

//     // here then method can return 3 things
//     // 1. it can return an  promise result
//     //2. it can return a simple value like string and any other console.log
//     // 3. it can return an error from here itself

//     let getUser = new Promise((resolve, reject) => {
//         const user = {
//             name: "john Doe",
//             email: "john@gmail.com",
//             password: "password",
//             permission: ["db", "hr", "dev"]
//         }

//         resolve(user)
//     })

//     getUser
//         .then((user) => {
//             console.log(`The name is ${user.name}`)

//             // return new Promise((resolve, reject) => {
//             //     resolve("Chittagong")
//             // })

//             // we can send also synchronus value like that below
//             // return user.email

//             // we can throw an error from then method itself
//             if (user.permission.includes("hr")) {
//                 throw new Error("you are not allowed")
//             }
//         })

//         // .then((address) => {
//         //     setTimeout(() => console.log(`user address is ${address}`),2000)
//         // })

//         // .then((email) => console.log(email))
//         .catch((error) => console.log(error))

// }

// {
//     // forming the promise chain

//     const number = new Promise((resolve, reject) => {
//         resolve(10)
//     })
//     number.then((value) => {
//         value++
//         return value
//     }).then((value) => {
//         value = value + 10
//         return value
//     }).then((value) => {
//         value = value + 20
//         console.log(value)
//     })
// }

// {
//     // finally method

//     // we use finally method to cleaned up database connection or stop somthing like loader

//     const promise = new Promise((resolve, reject) =>{
//         resolve("finally testing")
//     })

//     promise.finally(() => console.log("cleaned up"))
//     .then((value) => console.log(value))
// }

{
  function getPromise(URL) {
    let promise = new Promise(function (resolve, reject) {
      let req = new XMLHttpRequest();
      req.open("GET", URL);
      req.onload = function () {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          reject("There is an Error!");
        }
      };
      req.send();
    });
    return promise;
  }

  const ALL_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";

  let promise = getPromise(ALL_POKEMONS_URL);

  const consumer = () => {
    promise.then(
      (result) => {
        console.log({ result });
      },
      (error) => {
        console.log("We have encountered an Error!");
      }
    );
  };

  consumer();
}

// {
//     let promise = new Promise((resolve, reject) =>{
//         throw new Error("something is wrong")
//     }).catch(error => console.log(error))
// }
// {
//     let loading = true;
//     loading && console.log('Loading...');

//     let promise = new Promise((resolve, reject) => {
//         resolve("resolve")
//     })

//     promise.finally(() => {
//         loading = false
//         console.log(`promise settled and loading is ${loading}`)
//     }).then(result => console.log(result))
//         .catch(error => console.log(error))
// }

// {
//     let promise = getPromise(ALL_POKEMONS_URL)

//     promise.then((result) => {
//         let onePokeMan = JSON.parse(result).result[0].url
//         return onePokeMan
//     }).then((onePokeManUrl) => {
//         console.log(onePokeManUrl)
//         return getPromise(onePokeManUrl)
//     }).then(pokeman => {
//         console.log(JSON.parse(pokeman))
//     }).catch(error => console.log(error))
// }

// {
//     // rethrow the  promise
//     let promise = new Promise((resolve, reject) => {
//         reject(401)
//     })

//     promise.catch((error) => {
//         if (error === 401) {
//             console.log("rethrowing the error")
//             throw error
//         } else {

//         }
//     }).then(value => {
//         console.log(value)
//     }).catch(error => {
//         console.log(`error ${error} will handle here`)
//     })
// }

// {
//     // Return a value from the .then() handler

//     // Create a Promise
//     let getUser = new Promise(function (resolve, reject) {
//         const user = {
//             name: "John Doe",
//             email: "jdoe@email.com",
//             password: "jdoe.password",
//         };
//         resolve(user);
//     });

//     getUser
//         .then(function (user) {
//             console.log(`Got user ${user.name}`);
//             // Return a simple value
//             return user.email;
//         })
//         .then(function (email) {
//             console.log(`User email is ${email}`);
//         });
// }

// {
//     let getUser = new Promise(function(resolve, reject) {
//         const user = {
//             name: 'John Doe',
//             email: 'jdoe@email.com',
//             permissions: [ 'db', 'hr', 'dev']
//         };
//         resolve(user);
//     });

//     getUser
//     .then(function(user) {
//         console.log(`Got user ${user.name}`);
//         // Let's reject if a dev is having the HR permission

//         if(user.permissions.includes('hr')){
//             throw new Error('You are not allowed to access the HR module.');
//         }
//         // else resolve as usual
//     })
//     .then(function(email) {
//         console.log(`User email is ${email}`);
//     })
//     .catch(function(error) {
//         console.error(error)
//     });
// }

{
  // Chaining Promises - Basic Usage

  // Create a Promise
  let promise = new Promise(function (resolve, reject) {
    resolve("Resolving a fake Promise.");
  });

  // Create a Promise Chain
  promise
    .then(function (value) {
      console.log(value);
      return value;
    })
    .then(function (value) {
      console.log(`${value} Second time.`);
    });
}

{
  //   const firstPromise = Promise.resolve({ message: "hello" });

  //   const secondPromise = firstPromise
  //     .then((data) => JSON.stringify(data))
  //     .then((json) => json.indexOf(data.message) !== -1) // Corrected
  //     .then((boolean) => {
  //       if (boolean) console.log("JSON string was created successfully!");
  //       else throw new Error("JSON creation error");
  //     })
  //     .catch((error) => console.error(error));

  //   console.log(secondPromise);

  const firstPromise = Promise.resolve({ message: "hello" });

  const secondPromise = firstPromise
    .then((data) => {
      const json = JSON.stringify(data);
      const index = json.indexOf(data.message);
      return index !== -1;
    })
    .then((boolean) => {
      if (boolean) console.log("JSON string was created successfully!");
      else throw new Error("JSON creation error");
    })
    .catch((error) => console.error(error));

  console.log(secondPromise);

  //   const thirdPromise = firstPromise
  //     .then((data) => {
  //       if (data.message) return data.message + " world!";
  //       else throw new Error("The data doesn't contain a message!");
  //     })
  //     .then((newData) => console.log(newData.toUpperCase()))
  //     .catch((error) => console.error("Error in third Promise", error));
  //   console.log(thirdPromise);
}

{
  function doSomeThing() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Did something");
        resolve("https://example.com/");
      }, 2000);
    });
  }

  function doingSomethingElse(previousResult) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Doing something else");
        resolve(previousResult + " something-else");
      }, 1500);
    });
  }

  function doingThirdThings(previousResult) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Doing final task");
        resolve(previousResult + " final task");
      }, 1000);
    });
  }

  function failiureCallback() {
    return new Promise((reject) => {
      reject(new Error("There is something wrong"));
    });
  }

  doSomeThing()
    .then((result) => {
      return doingSomethingElse(result);
    })
    .then((newResult) => {
      return doingThirdThings(newResult);
    })
    .then((finalResult) => {
      console.log(finalResult);
    })
    .catch(failiureCallback);
}

{
  doSomething()
    .then((url) => {
      // Missing `return` keyword in front of fetch(url).
      fetch(url);
    })
    .then((result) => {
      // result is undefined, because nothing is returned from the previous
      // handler. There's no way to know the return value of the fetch()
      // call anymore, or whether it succeeded at all.
    });
}
{
  const listOfIngredients = [];

  doSomething()
    .then((url) => {
     return fetch(url)
        .then((res) => res.json())
        .then((data) => {
          listOfIngredients.push(data);
        });
    })
    .then(() => {
      console.log(listOfIngredients);
    });
}
