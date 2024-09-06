// Todays topic
// function declaration, definition, argument , parameter, function, method, callback and higherorder function, scope and clousure, callback function,

// Rest parameter should be the last parameter and a function have only one rest parameter, this keyword, this keyword in arrow function, pure function, group operator(use with IIFE), function execution(callstack), Recursion

function myFunc(x, ...y) {
  console.log(x);
  console.log(y);
}

myFunc(1, 2, 3, 4, 5, 6, 78);

{
  // but this line will throw an error
  // function myFunc(x, ...y, ...z) {
  //     console.log(x);
  //     console.log(y);
  //   }
  //   myFunc(1,2,3,4,5,6,78)
}

{
  //  this line also will throw an error
  // function myFunc(x, ...y, z) {
  //     console.log(x);
  //     console.log(y);
  //   }
  //   myFunc(1,2,3,4,5,6,78)
}

{
  function myFunc() {
    console.log("x", this);
  }
  myFunc();
}

{
  // here this keyword refer to the window object

  function x() {
    console.log("x", this);
  }
}
{
  // here this keyword refers to the person object

  function x() {
    // console.log("x", this);
  }

  const person = {
    name: "rudra",
  };
  person.fun = x;
  console.log(person.fun());
}

{
  // when we use this keyword in arrow function its (this) value depend on where we create it (funciton) not where we execute it(function)
  // const x = () => {
  //   console.log("x", this);
  // };
}

{
  function outerFunction() {
    console.log("outer function");

    function innerFunction() {
      console.log("inner funciton");
      return x * 5;
    }

    return innerFunction;
  }
  outerFunction(4);
}

{
  // higer order function. higer order function can receive as a parameter

  function getCapture(camera) {
    camera();
  }
  getCapture(() => {
    console.log("cannon");
  });

  // it can also return a function without parameter
  function returnFunc() {
    return function () {
      console.log("hi");
    };
  }

  // returnFunc()();
  const result = returnFunc();
  console.log(result());
}

{
  // IIFE concept
  (function () {
    console.log("i am an anonymous function");
  })();
}

{
  // Recursion call itself.Recursion must have a base condtion to stop infinity call
  function foo() {
    console.log("foo");
    // foo();
  }
  // foo()
}

{
  // recursion practical example
  function fetchWater(count) {
    if (count === 0) {
      console.log("No More attempt left");

      return;
    }
    console.log("Fetching water...", count);
    fetchWater(count - 1);
  }

  // fetchWater(5);
}


