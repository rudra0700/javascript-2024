// hoisting means creation memory allocation for variable and function .

// basically hoisting means the process of creating memory location for variable and function when global executions creation phase occur

{
  // this code block will throw an error. because test is a variable. In global execution context , when creation phase start it set undefined value for  test varible. then  when execution phase occur jaavascript see that test is not a function rather than a varible.

  // test is a variable and function is the value of the test varible. test is not a funciton

  test();
  const test = function () {
    console.log("this is function x");
  };
}
