// Topic: JS Basics
// From 02-JS-Basics.md — Data Types, Arithmetic, Variables, Conditionals

// Arithmetic operators
console.log(3 + 4); // 7
console.log(9 / 3); // 3

// let / const
let count = 1;
const pi = 3.14159;

// Template literals
const name = "Owen";
const city = "Cork City";
console.log(`My name is ${name}. My favourite city is ${city}.`);

// typeof
console.log(typeof "foo");  // "string"
console.log(typeof 10);     // "number"
console.log(typeof true);   // "boolean"

// Conditionals
let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}
