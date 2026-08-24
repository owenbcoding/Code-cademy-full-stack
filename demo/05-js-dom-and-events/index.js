// Topic: JS DOM and Events
// Open index.html in a browser to run this (Node has no DOM).

const button = document.querySelector("#greet-btn");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
  output.textContent = "Hello from the DOM!";
});
