// Topic: JS Functions & Scope
// From 03-JS-Functions.md

// Function declaration
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return "You need positive integers to calculate area!";
  }
  return width * height;
}

console.log(rectangleArea(5, 3)); // 15

// Default parameters
function greeting(personName = "stranger") {
  console.log(`Hello, ${personName}!`);
}

greeting("Nick"); // "Hello, Nick!"
greeting();       // "Hello, stranger!"

// Arrow function (concise body)
const greaterThanFive = (num) => (num > 5 ? true : false);
console.log(greaterThanFive(8)); // true

// Block scope
const logVisibleLightWaves = () => {
  let lightWaves = "Moonlight";
  console.log(lightWaves); // "Moonlight"
};

logVisibleLightWaves();
