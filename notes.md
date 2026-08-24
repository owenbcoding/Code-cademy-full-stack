# JavaScript Fundamentals — Notes

> Full Stack (JavaScript) career path
> Use this as a running cheat sheet. Add notes as you go.
> Full explanations and examples live in the top-level `01-Intro-JS.md` … `08-Node-Express-and-PostgreSQL.md` files — this is the quick-reference version.

---

## 01 — Intro to JS
- JS runs in the browser and (via Node) on the server
- `console.log()` prints output
- Statements typically end with `;`

---

## 02 — JS Basics
- `let` / `const` for variables (avoid `var`)
- Common types: `string`, `number`, `boolean`, `null`, `undefined`
- Template literals: `` `${var}` `` for interpolation

---

## 03 — JS Functions
- Function declarations, function expressions, and arrow functions
- Parameters can have default values
- Arrow functions don't bind their own `this`

---

## 04 — JS Arrays and Objects
- Arrays are ordered, zero-indexed lists: `[]`
- Objects are unordered key-value pairs: `{}`
- `const` arrays/objects can be mutated, just not reassigned
- `for...of` for array values, `for...in` / `Object.keys()` for object keys

---

## 05 — JS DOM and Events
- `document.querySelector()` selects an element
- `addEventListener()` attaches behavior to events
- DOM code needs a browser — open the `index.html`, not just `node index.js`

---

## 06 — JS Async and APIs
- Promises represent a value that resolves (or rejects) later
- `async`/`await` is sugar on top of Promises
- `fetch()` is the common way to call an API

---

## 07 — React and Redux
- Components are functions that return JSX
- Redux stores app state in one place, updated via reducers + actions
- Needs a bundler (Vite, etc.) — not runnable with plain `node`

---

## 08 — Node, Express, and PostgreSQL
- `express()` sets up a server; `app.get/post(...)` defines routes
- `pg` (`Pool`) connects Node to PostgreSQL
- Keep DB credentials in environment variables, not hardcoded

---

## Gotchas / Things to Remember
-

---

## Useful Built-in Methods
| Method | What it does |
|---|---|
| `console.log(x)` | Print a value (great for debugging) |
| `arr.length` | Length of an array |
| `arr.filter(fn)` | Filter array by condition |
| `arr.map(fn)` | Transform array elements |
| `arr.includes(val)` | Check if a value exists in an array |
| `arr.join(', ')` | Join array into a string |
| `str.split(',')` | Split string into an array |
| `Object.keys(obj)` | Array of an object's keys |
| `Object.entries(obj)` | Array of `[key, value]` pairs |
