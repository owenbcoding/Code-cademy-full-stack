// Topic: JS Functions
// - function declarations, function expressions, and arrow functions
// - Parameters can have default values
// - Arrow functions are shorter and don't bind their own `this`

function add(a, b = 0) {
  return a + b;
}

const multiply = (a, b) => a * b;

console.log(add(2, 3));
console.log(multiply(2, 3));
