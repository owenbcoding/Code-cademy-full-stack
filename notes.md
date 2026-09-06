# JavaScript Fundamentals — Notes

> Full Stack (JavaScript) career path
> Consolidated from the old `01-Intro-JS.md` … `08-Node-Express-and-PostgreSQL.md` files. Runnable code lives in each lesson's `*/index.js` (or `index.html`); this file keeps the explanations, vocab, and review notes.

---

## 01 — HTML & CSS Foundations

> Note: despite the lesson numbering, this section is HTML/CSS (not JavaScript) — full-stack fundamentals covered before the JS material starts below.

### HTML

HTML (**H**yper**T**ext **M**arkup **L**anguage) provides structure to the content on a website — text, images, videos. It's composed of **elements** (opening/closing tags with content between them), which can be **nested**: a child element inside a parent inherits behavior/styling context from it. Headings (`<h1>`–`<h6>`) provide titles for sections, largest to smallest.

**Attributes** expand an element's tag (e.g. `id`) to change styling or provide information. `<p>` holds a block of text; `<span>` targets inline text; `<div>` groups elements (little visual representation on its own, but useful for shared styling). `<em>` emphasizes text (italic), `<strong>` highlights important text (bold). `<br>` forces a line break. `<ul>`/`<ol>` hold list items (`<li>`) — unordered/bulleted vs ordered/numbered. `<img>` is self-closing and uses `src`; the `alt` attribute describes the image for accessibility, SEO, and as a fallback if the image fails to load. `<video>` works similarly, with fallback text shown if the browser doesn't support video.

### CSS

CSS (Cascading Style Sheets) styles HTML content. A **ruleset** = a **selector** (what to target) + a **declaration block** (`{ }`) of **declarations** (property/value pairs). Inline styles (`style="..."`) apply directly to one element but are rarely used in real projects; more common are **internal** (`<style>` in `<head>`) and **external** (`<link rel="stylesheet">`) stylesheets.

**Selectors**: the universal selector `*` matches everything; **class** selectors (`.name`, elements can have multiple classes) and **ID** selectors (`#name`, unique per element) are the most common ways to target elements; **attribute** selectors (e.g. `[href]`, `img[src*='winter']`) match by attribute/value; **pseudo-classes** (`:hover`, `:focus`, `:visited`, `:disabled`) style elements based on interaction state. **Chaining** (`h1.special`) requires multiple selectors to match at once; the **descendant combinator** (`.main-list li`) selects elements nested inside another. More tags/classes/IDs in a selector = higher **specificity** — IDs beat classes beat type selectors; best practice is to style with the lowest specificity that works, so overrides stay easy. `!important` overrides any style regardless of specificity and should almost never be used.

**Box model**: every element's box has `padding` (space between content and border), `border` (thickness/style/color around the content+padding), and `margin` (space outside the border). Shorthand goes clockwise from the top (`padding: 6px 11px 4px 9px`). `margin: 0 auto` centers an element horizontally. Vertical margins **collapse** to the larger value; horizontal margins add together. `min-width`/`max-width`/`min-height`/`max-height` bound an element's size. `visibility: hidden|visible|collapse` hides/shows elements (unlike `display: none`, hidden elements still take up space).

**Position**: `static` (default) / `relative` (offset from its normal position) / `absolute` (removed from flow, positioned against the nearest positioned ancestor) / `fixed` (pinned regardless of scroll) / `sticky` (in-flow until a scroll threshold, then sticks). `z-index` controls front-to-back stacking (higher = further forward) — only works on positioned (non-static) elements.

**Display**: `inline` elements (like `<em>`, `<a>`) sit in the text flow; `block` elements take their own line; `inline-block` combines both, letting elements sit side-by-side while still accepting `width`/`height`. `float` (`left`/`right`) is mostly legacy for wrapping text around images — grid/flexbox are the modern layout tools. `clear` (`left`/`right`/`both`/`none`) controls how elements behave when they bump into floated elements.

**Breadcrumbs**: secondary navigation showing the trail to the current page (vs. primary nav, which appears on every page). Types: **location** (site hierarchy), **attribute** (based on the current page/item), **path** (the user's actual journey — can be confusing, use sparingly). Implemented as an unordered list, typically separated with `>` or `/` via a `::before`/`::after` pseudo-element.

**Flexbox** lays out items in **one dimension**, distributing space among children of a flex container (`display: flex`). Key properties: `justify-content` (main axis spacing: `flex-start`/`flex-end`/`center`/`space-around`/`space-between`), `align-items` (cross-axis spacing, e.g. `baseline` aligns by content baseline), `flex-grow`/`flex-shrink`/`flex-basis` (how items grow/shrink and their starting size — the `flex` shorthand sets all three), `flex-wrap` (lets items move to a new line instead of shrinking), `flex-direction` (which axis is "main"), `flex-flow` (shorthand for wrap + direction). Flex containers can nest.

**CSS Grid** lays out a page in **two dimensions** (rows and columns). `display: grid` / `inline-grid` marks a grid container. `grid-template-columns`/`grid-template-rows` define track count and size (or the `grid-template` shorthand for both); the `fr` unit sizes tracks as a fraction of available space; `repeat(3, 100px)` duplicates a track definition; `minmax(100px, 500px)` lets a track resize within a range; `gap`/`row-gap`/`column-gap` add spacing between tracks (not at the edges). Items can span multiple tracks via `grid-row`/`grid-column`/`grid-area` (the last takes `row-start / column-start / row-end / column-end`). **Named areas** (`grid-template-areas` + per-item `grid-area: name`) give a readable way to lay out a page, and can be used to deliberately overlap elements (with `z-index` to control stacking). The **implicit grid** auto-creates extra rows/columns when there are more items than the explicit grid defines; `grid-auto-rows`/`grid-auto-columns` size those implicit tracks, and `grid-auto-flow` (`row` default or `column`, optionally with `dense` to backfill gaps) controls the direction they're created in.

Alignment on a grid: `justify-items`/`align-items` position **individual** items along the row/column axis within their own cell (default `stretch`); `justify-content`/`align-content` position the **whole grid** (or its rows) within the container, with values like `center`/`space-around`/`space-between`/`space-evenly`; `justify-self`/`align-self` override the container-level `-items` values for a **single** element.

**Responsive units**: `em` sizes relative to the current/parent element's font size; `rem` ("root em") sizes relative to the root `<html>` element's font size instead — more predictable when nesting. Percentages commonly size width/height/padding/margin (a child's percentage depends on its parent's dimensions being set). Scaling media proportionally: set one of height/width to a fixed value and the other to `auto`.

**Media queries** adapt styles to screen size: `@media only screen and (max-width: 480px) { ... }`. Combine `min-width`/`max-width` with `and` to target a range; stack multiple queries to progressively override rules as the screen grows; a comma-separated list of features only needs *one* to match (e.g. combining a width condition with `orientation: landscape`). `min-resolution`/`max-resolution` target high-DPI screens. The viewport meta tag (`<meta name="viewport" content="width=device-width, initial-scale=1">`) tells the browser to render at the device's actual width rather than a shrunk desktop layout. **Breakpoints** — the screen sizes where a layout starts to break — are usually found in practice by resizing the browser.

---

## 02 — JavaScript Basics

JavaScript is a flexible, powerful language used in both the **browser (front-end)** and on the **server (back-end)** via environments like Node.js. It's standardized as **ECMAScript (ES)**. ES6 ("modern JavaScript") introduced `let`/`const`, arrow functions, classes, default parameters, Promises, and more. Outside the browser, JS runs via **Node.js** — create a `.js` file and run it with `node file.js` (see `Building interactive websites/Part 1/Introduction to JavaScript/index.js`).

**Data types** — eight fundamental types: `number` (including decimals), `bigint` (very large integers, `123n`), `string`, `boolean`, `null` (intentional absence of a value), `undefined` (declared but not assigned), `symbol` (unique identifiers), and `object` (collections of related data/behavior). The first seven are **primitive**; objects are more complex.

**Arithmetic operators**: `+` `-` `*` `/` `%`. `console.log(...)` evaluates the expression inside and logs the result.

**Strings**: append with `+` (**concatenation**), or use **template literals** (backticks + `${}`) for cleaner interpolation — see `Building interactive websites/Part 1/JavaScript Basics/index.js`.

**Properties & methods**: JS wraps primitive values in an object so they expose properties (e.g. `"Hello".length`) and methods (e.g. `"hello".toUpperCase()`), accessed via dot notation. A **prototype** is the object other objects inherit methods/properties from.

**Built-in objects**: `Math` (e.g. `Math.random()` → decimal in [0, 1), `Math.floor()` → rounds down), `Date`, `JSON`.

**Variables**: `var` is function-scoped, hoisted, and can be redeclared — generally avoid it. `let` is block-scoped and can be reassigned. `const` is block-scoped and must be assigned once (cannot be reassigned, though object/array contents can still be mutated). Assignment shorthand: `+=` `-=` `*=` `/=`; increment/decrement: `++`/`--`.

**`typeof`** returns a value's data type as a string.

**Conditionals**: `if`/`else if`/`else` make decisions. Comparison operators: `<` `>` `<=` `>=`, `===` (strict equality — value **and** type), `!==` (strict inequality). **Logical operators**: `&&` (AND, both sides true), `||` (OR, at least one side true), `!` (NOT, flips true/false).

**Truthy/falsy**: non-boolean values coerce to `true`/`false` in conditionals. Falsy values: `0`, `""`/`''`, `null`, `undefined`, `NaN` — everything else is truthy. Shortcut: `a || b` returns `a` if truthy, else `b` (handy for defaults).

**Ternary operator**: `condition ? expressionIfTrue : expressionIfFalse` — a compact `if…else`.

**`else if` vs `switch`**: use `else if` for multiple distinct conditions; use `switch` when checking one value against many options — always include `break` (or `return`) per `case` to avoid fall-through.

**Vocab**: ECMAScript/ES6, primitive types, `let`/`const`, template literals, operator, truthy/falsy, conditional.

**Remember**: prefer `const` by default (use `let` only when reassigning); use `===`/`!==` unless coercion is explicitly wanted; template literals are usually clearer than `+` concatenation.

---

## 03 — JavaScript Functions & Scope

A **function** is a reusable block of code (`function name() { ... }`) that you **call** (invoke) with `name()`. Function **declarations** are **hoisted** — you can technically call them before they appear in the file, though it's better style to declare first.

**Parameters** are the names listed in a function's definition; **arguments** are the actual values passed at call time (order must match). **Default parameters** (ES6) provide a fallback value used when no argument (or `undefined`) is passed — an explicit argument always overrides the default.

`return` sends a value back to the caller and immediately ends the function — code after `return` in the same block never runs. **Helper functions** (a function called inside another) break big problems into smaller, testable, reusable pieces.

**Function expressions** store a function in a variable (`const f = function() {...}`) — unlike declarations, these are **not hoisted**, so you can't call them before the line they're defined on. An unnamed function expression is **anonymous**.

**Arrow functions** (ES6) are a shorter expression syntax. A concise body omits parentheses (single parameter) and omits `{}`/`return` (single expression body). They're very common with array methods and React.

**Scope** is where a variable can be accessed. **Global scope** = declared outside any function/block, accessible everywhere (convenient but risky — long-lived, can be overwritten from anywhere). **Block/local scope** = `let`/`const` declared inside `{}` are only visible inside that block. **Scope pollution** happens with too many globals or careless name reuse across scopes — prefer local variables, avoid unnecessary globals, use specific names. **Shadowing**: an inner declaration with the same name as an outer one only overrides it for the duration of that inner block.

**Vocab**: function, declaration vs expression, arrow function, parameter/argument, `return`, scope, shadowing.

**Remember**: declare functions before use when practical, even though declarations hoist; keep variables as local as possible; missing `return` means the function returns `undefined`.

---

## 04 — JS Arrays and Objects

### Arrays

An **array** is an ordered list of values in `[]`; each item is an **element**. Arrays are **zero-indexed** (first element at index `0`) and **ordered** — insertion order is preserved. Access elements with **bracket notation** (`arr[0]`); strings are indexable the same way. `const` arrays can't be **reassigned** but their contents **can** still be **mutated** (`arr[0] = x`, `.push()`, `.pop()`, etc.). `.length` returns the element count, often used as a loop bound. `.push()` adds to the end; `.pop()` removes and returns the last element — both are **mutating** (destructive) methods.

Arrays are **passed by reference**: a function that mutates an array parameter mutates the original array too. **Nested arrays** (arrays containing arrays) are accessed by chaining bracket notation (`arr[1][0]`).

### Loops

A `for` loop (`for (init; condition; after) {}`) repeats while the condition holds. `for...of` iterates the **values** of an iterable (arrays, strings) with simpler syntax. Loop in reverse (`i = arr.length - 1; i >= 0; i--`) when removing items during iteration, to avoid index bugs. `for...in` iterates an object's **keys** (careful with inherited keys — prefer `Object.keys`/`Object.entries` for "own" properties). **Nested loops** compare every element of one collection against every element of another, but get slow on large data. `while` loops run while a condition holds (make sure it eventually becomes false, to avoid infinite loops); `do…while` runs the body **at least once** before checking. `break` exits a loop early; `continue` skips to the next iteration.

### Objects

An **object** groups related data (and optionally behavior) as **key-value pairs**, called **properties** — unlike arrays, plain objects are **unordered** (named properties, not positions). Create with an **object literal** `{}`; keys can be unquoted when they're valid identifiers, quoted when they have spaces/special characters.

**Access**: dot notation (`obj.key`) for valid identifiers; bracket notation (`obj["key"]` or `obj[variable]`) for dynamic or non-identifier keys.

**Assignment**: objects are **mutable** — `.` or `[]` with `=` either replaces an existing property's value or adds a new one. `const` still allows mutating the object's contents (just not rebinding the variable to a different object). `delete obj.prop` removes a property.

**Methods** are properties whose value is a function (`bark() { ... }` — ES6 method shorthand); call with `obj.method()`.

**Nested objects** hold other objects as properties (which may themselves hold arrays of objects); chain `.`/`[]` at each level, evaluated left to right, matching whichever notation the key needs.

**Pass by reference**: passing an object into a function passes a reference to the *same* object in memory — mutations inside the function persist outside it, even for a `const`-declared object.

**Looping objects**: `for...in` iterates enumerable keys; `Object.keys()`/`Object.values()`/`Object.entries()` return arrays you can loop with `for...of`.

### Advanced Objects

**`this`** refers to the calling object — the object a method was called on — and its value depends on **how** the function is invoked. **Arrow functions do not have their own `this`** — they inherit it from the surrounding scope, which is why an arrow-function "method" often can't read the object's own properties the way a regular method can.

**Privacy**: JavaScript objects have no built-in privacy, but there are conventions — most commonly an underscore prefix (`_energyLevel`) signaling "please don't mutate this directly," even though nothing technically stops you.

**Getters** (`get name() { ... }`) let you read a computed/validated value that looks like a plain property access (no parentheses) but runs logic behind the scenes — useful for deriving a value or returning something conditional. **Setters** (`set name(value) { ... }`) run when you *assign* to a property, so you can validate input or update related state before writing it — also called without parentheses, via normal assignment syntax. A property cannot share the exact name as its getter/setter (causes infinite recursion) — the underscore-prefix convention avoids this. Callers can still bypass a setter by assigning directly to the underlying `_property`.

**Factory functions** return a new object (optionally configured by parameters) and can be called repeatedly to produce many similar objects, without `new` or classes.

**Property value shorthand** (ES6): when a variable name matches the property key, write `{ x }` instead of `{ x: x }`.

**Destructuring assignment** pulls values out of objects/arrays into variables using a pattern on the left of `=` — e.g. `const { a, b } = obj`. Only the named keys become variables; everything else stays on the object. Nesting on the left can mirror nesting on the right (`{ outer: { inner } } = obj`).

**Built-in Object methods**: `Object.keys()`/`Object.values()`/`Object.entries()` (iteration), `Object.assign()` (merge/copy properties into a target), `Object.freeze()`, `Object.create()`, `Object.hasOwn()`, plus instance methods every object literal inherits from `Object.prototype` (`hasOwnProperty`, `valueOf`, etc.).

### Iterators

**Iterator methods** are built-in array methods that take a **callback function** and run it once per element, replacing manual `for` loops for most common operations.

`.forEach(callback)` runs the callback on every element for its side effects and always returns `undefined` — use it when you're not building a new value (e.g. logging).

`.map(callback)` returns a **new array** the same length as the original, where each element is the callback's return value for the corresponding input element — use it to transform data without mutating the source array.

`.filter(callback)` returns a **new array** containing only the elements for which the callback returns truthy — the callback acts as a test, not a transform.

`.findIndex(callback)` returns the **index** of the first element for which the callback returns truthy, or `-1` if none match; `.find(callback)` works the same way but returns the **element itself** (or `undefined`).

`.reduce((accumulator, currentValue) => {...}, initialValue)` boils an array down to a single value by carrying an **accumulator** through each element — the callback's return value becomes the accumulator for the next iteration. `initialValue` sets the accumulator's starting value (and is the seed returned if the array is empty); omitting it makes `.reduce()` use the array's first element as the initial accumulator instead, which is usually undesirable.

All of these accept the callback in the form `(element, index, array) => {...}` — `index`/`array` are optional and often omitted when unneeded. None of `.map`/`.filter`/`.find`/`.findIndex`/`.reduce` mutate the original array (unlike `.push`/`.pop`); `.forEach` doesn't mutate either, though the callback itself could mutate elements if written to.

**Vocab**: array, index, element, zero-indexed, `.length`, `.push()`/`.pop()`, mutating method, pass by reference, nested array, `for`/`for...of`/`for...in`, `while`/`do…while`, `break`/`continue`, nested loop, object, property, method, object literal, dot/bracket notation, `Object.keys`/`values`/`entries`, iterator method, callback, accumulator.

**Remember**: arrays are ordered and zero-indexed; `const` arrays/objects can still be mutated even though the binding can't be reassigned; prefer reverse `for` loops when removing items during iteration; a `while` loop needs a condition that eventually becomes false; `break` stops the whole loop, `continue` skips one iteration; nested loops can be slow on large data; choose arrays for ordered lists, objects for records/maps; prefer iterator methods (`.map`/`.filter`/`.reduce`/etc.) over manual loops when transforming or summarizing array data — they're more declarative and don't mutate the source array; always pass `.reduce()` an `initialValue` unless you specifically want the first element as the starting accumulator.

---

## 05 — JS DOM and Events *(outline)*

- The **DOM** is a **tree-like representation** of the HTML in a page. JavaScript can **read** and **modify** this structure at runtime.
- Selecting elements: `document.getElementById`, `querySelector`, `querySelectorAll`.
- Reading/changing content: `textContent`, `innerHTML`. Editing attributes/classes: `setAttribute`, `classList.add/remove/toggle`.
- **Modifying styles**: via the `.style` property or by adding/removing CSS classes (change colors/sizes/visibility, show/hide based on input).
- **Events** represent user interactions (clicks, key presses, form submissions); `addEventListener` responds to them. Topics to expand: click events, keyboard events (`keydown`/`keyup`), form submit + validation.
- **Event propagation** (bubble & capture) — how events move through the DOM tree; `event.stopPropagation()` stops it.
- **Default browser behavior** — `event.preventDefault()` stops things like form submission or link navigation.
- **Patterns** to document as you learn them: interactive components (modals, dropdowns, tabs), handling input and updating the UI dynamically.

**Vocab**: DOM, element/node, `querySelector`/`querySelectorAll`, `textContent`/`innerHTML`, `classList`, event listener.

**Remember**: keep DevTools Elements + Console open while learning the DOM; separate structure (HTML), style (CSS), and behavior (JS).

---

## 06 — JS Async and APIs *(outline)*

- Synchronous code runs **top-to-bottom**; asynchronous code can start work now and finish later without blocking the main thread. Topics to add: the event loop (high-level), callbacks vs promises vs `async`/`await`.
- **Callbacks** — functions passed as arguments, invoked when work completes (`setTimeout`, `setInterval`; watch for "callback hell").
- **Promises** represent a value that may be available now, later, or never. States: `pending`, `fulfilled`, `rejected`. Chain with `.then()`/`.catch()`.
- **`async`/`await`** is sugar on top of promises, making async code read more like synchronous code. Error handling via `try { ... } catch (error) { ... }`.
- **Fetching data**: `fetch()` for HTTP requests — basic GET + `response.json()`, handling errors/loading states, sending data with POST/PUT/PATCH/DELETE.
- **Practical patterns** to document as you learn them: fetching on page load and rendering, calling an API after user input, working with third-party APIs.

**Vocab**: callback, promise, `async`/`await`, `fetch`, JSON.

**Remember**: always handle rejected promises (`.catch` or `try/catch` with `await`); `fetch` only rejects on network errors, not HTTP 4xx/5xx — check `response.ok`.

---

## 07 — React and Redux *(outline)*

- **React basics**: what React is and why; functional components; JSX syntax; props and state.
- **Component composition**: building UIs from small reusable components; parent/child relationships and passing data via props.
- **State & hooks**: `useState` for local state; `useEffect` for side effects (fetching, subscriptions); derived state and lifting state up.
- **React and the DOM**: virtual DOM basics; rendering lists; handling events (`onClick`, `onChange`, etc.).
- **Intro to Redux**: why Redux (global state management); core principles — single store, actions, reducers; data flow: dispatch → reducer → new state.
- **Redux with React**: setting up a store; `Provider`, `useSelector`, `useDispatch`; splitting state into slices.
- **Async flows with Redux**: thunks (`redux-thunk`) or other middleware for async API calls.

**Vocab**: component, JSX, props, state, `useEffect`, Redux store/reducer/action.

**Remember**: treat props as read-only, update UI via state or lifted state; `useEffect` dependencies matter — stale closures and infinite loops are common gotchas.

---

## 08 — Node, Express, and PostgreSQL

A **runtime environment** is where your program executes — it determines which **global objects** you can access and how your program talks to the OS/network/filesystem. JS commonly runs in two environments: the **browser** (front-end, `window`, DOM) and **Node** (back-end, filesystem, env vars, network APIs — no `window`/DOM, but you get `process`, `__dirname`, module utilities).

`process.env` holds environment variables (e.g. `PWD`). Run a Node file with `node file.js` (see `Building interactive websites/Part 2/Node Express and PostgreSQL/index.js`).

**Express** is a minimal web framework for Node: `express()` creates an app, `app.get/post(...)` defines routes, `app.use` registers middleware, `express.json()` parses JSON bodies.

**PostgreSQL** is a relational database — basic SQL is `SELECT`/`INSERT`/`UPDATE`/`DELETE`. Connect Node to Postgres with the `pg` package's `Pool`, and always use **parameterized queries** rather than building SQL with string concatenation from user input.

**Full-stack PERN overview**: React (front-end) talks to Express (API), Express talks to PostgreSQL (database); keep configuration in environment variables.

**Vocab**: runtime, `global`/`window`/`process`, module (`require`/`import`), Express, PostgreSQL/SQL, PERN (Postgres, Express, React, Node).

**Remember**: never build SQL with raw string concatenation from user input — use parameters; keep secrets in environment variables, not source code.

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
| `arr.forEach(fn)` | Run a function on each element (no new array) |
| `arr.reduce(fn, init)` | Boil an array down to a single value |
| `arr.find(fn)` / `arr.findIndex(fn)` | First matching element / its index |
| `arr.includes(val)` | Check if a value exists in an array |
| `arr.join(', ')` | Join array into a string |
| `str.split(',')` | Split string into an array |
| `Object.keys(obj)` | Array of an object's keys |
| `Object.entries(obj)` | Array of `[key, value]` pairs |
