// Topic: JS Async and APIs
// - Promises represent a value that resolves (or rejects) later
// - async/await is sugar on top of Promises
// - fetch() (browser/Node 18+) is the common way to call an API

async function getJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();
  console.log(`${data.setup} — ${data.punchline}`);
}

getJoke().catch((err) => console.error("Request failed:", err));
