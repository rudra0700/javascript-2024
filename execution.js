// topic today

// tokenization,AST,machine code, lexica/  enviroment,GEC, function execution context, call stack(Function Execution Stack)

// with the help of tokenization javascript make ast (abstract syntax tree) , javascript take AST  as a input to produce output as a machine code  and we see maching code as a display in browser.

// javascript makes execution context only for the line which line is going to be executed. There may be thousand line of lexical enviroment but the line will be executed which is in execution phase

// when javascript run first time it makes a global execution context (GEC) even if there is no single line of code. when javascript run it gives us two special object. the first one is window object and the second one is this keyword. In GEC the value of window and this is same (window === this).

//Global execution context has two phase. Number one is creation phase and the number two is execution phase.

//this keyword created from GEC

// like GEC , we have function execution context and this execution has two phase.

// all the things outside  of the function is global execution context

const message = "i can do it";

function sum(a, b) {
  const result = a + b;
  return result;
}

function mul(a, b) {
  const result = a * b;
  return result;
}

function calc(a, b) {
  return sum(a, b) + mul(a, b);
}

function getResult(a, b) {
  return calc(a, b);
}

console.log(getResult(5, 7));
