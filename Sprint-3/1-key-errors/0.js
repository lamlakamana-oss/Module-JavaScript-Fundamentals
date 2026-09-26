// Predict and explain first...
//I think this code will show a SyntaxError. The function has two variables named str in the same scope.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}
console.log(capitalise("hello"));
// str is used both as the function parameter (function capitalise(str)) and again in let str = ...
