# 04 – Arrays, Loops, and Objects — Lesson 4

> **Main point:** These notes reorganize your array and loop content from `Full Stack | Js interactive websites` into one coherent module, including a concise **objects** section with diagrams.
>
> **Code blocks:** Fences use **triple tildes** (e.g. `~~~jsx`, `~~~text`, `~~~html`, `~~~css` … `~~~`) instead of triple backticks if the backtick key is awkward. For short snippets, many Markdown previews also accept HTML: `<pre><code class="language-js">…</code></pre>`.

## 04 – Arrays, Loops, and Objects — Chapter 4 — 03/23/2026

*Use **Main notes** for explanations and code examples; use **Vocab** and **Important notes** when you review.*

---

## Main notes


### Arrays – Basics

An **array** is an ordered list of values, written with square brackets `[]`.

~~~jsx
const mixedArray = ["Owen", 42, true];
~~~

![Array literal: elements inside square brackets](assets/js-array-structure-diagram.png)

- The array is everything inside the `[]`.
- Each item is an **element**.
- Elements can be **any** type (numbers, strings, booleans, objects, other arrays, etc.).


#### Key points

- Arrays are **ordered** – the order you insert items is preserved.
- Arrays are **zero‑indexed** – the first element is at index `0`.

---

### Accessing Elements

Use **bracket notation** with an index:

~~~jsx
const cities = ["New York", "London", "Tokyo"];

console.log(cities[0]); // "New York"
console.log(cities[1]); // "London"
console.log(cities[2]); // "Tokyo"
~~~

![Zero-based indices and bracket notation to read an element](assets/js-array-indexing-diagram.png)

Strings are also indexable:

~~~jsx
const hello = "Hello World";
console.log(hello[6]); // "W"
~~~

---

### Arrays with `let` and `const`

~~~jsx
let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];
const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];
~~~

- Declaring an array with **`const`** means you **cannot reassign** the variable:
  - `utensils = []` ❌
- But you **can** still **mutate** its contents:

~~~jsx
utensils[0] = "Spoon"; // ✅ allowed
~~~

- Declaring with **`let`** allows both **mutation** and **reassignment** of the variable.

---

### The `.length` Property

`.length` returns the **number of elements** in an array:

~~~jsx
const newYearsResolutions = ["Keep a journal", "Take a falconry class"];

console.log(newYearsResolutions.length); // 2
~~~

`.length` is also used heavily with loops to know when to stop.

---

### Adding and Removing Elements

#### `.push()` – add to the end

~~~jsx
const itemTracker = ["item 0", "item 1", "item 2"];

itemTracker.push("item 3", "item 4");

console.log(itemTracker);
// ["item 0", "item 1", "item 2", "item 3", "item 4"]
~~~

- `.push()` is a **mutating** (destructive) method – it changes the original array.

#### `.pop()` – remove from the end

~~~jsx
const newItemTracker = ["item 0", "item 1", "item 2"];

const removed = newItemTracker.pop();

console.log(newItemTracker); // ["item 0", "item 1"]
console.log(removed);        // "item 2"
~~~

- `.pop()` removes the **last** element and returns it.
- Also mutates the original array.

---

### Arrays & Functions

Arrays are **passed by reference**, so changes inside functions can affect the original array.

~~~jsx
const flowers = ["peony", "daffodil", "marigold"];

function addFlower(arr) {
  arr.push("lily");
}

addFlower(flowers);
console.log(flowers);
// ["peony", "daffodil", "marigold", "lily"]
~~~

Another example:

~~~jsx
const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}

changeArr(concept);
console.log(concept); // ["arrays", "can", "be", "MUTATED"]

function removeElement(arr) {
  arr.pop();
}

removeElement(concept);
console.log(concept); // ["arrays", "can", "be"]
~~~

Be careful when mutating arrays inside functions – it can be powerful but also surprising if you expect data to stay unchanged.

---

### Nested Arrays

Arrays can contain other arrays – these are **nested arrays**.

~~~jsx
const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]);    // [2, 3]
console.log(nestedArr[1][0]); // 2
~~~

Chain bracket notation to access deeper levels:

- `nestedArr[1]` → the second inner array (`[2, 3]`)
- `nestedArr[1][0]` → first element of that inner array (`2`)

---

### Loops – Basics

Loops help you avoid writing the same code over and over.

#### `for` loop structure

~~~jsx
for (initialization; condition; finalExpression) {
  // code to run each time
}
~~~

Example:

~~~jsx
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
// 0, 1, 2, 3
~~~

Explanation:

- `let counter = 0` – start at 0.
- `counter < 4` – keep looping while this is true.
- `counter++` – increase by 1 each iteration.

Another example (5 to 10):

~~~jsx
for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}
// 5, 6, 7, 8, 9, 10

~~~
Another `for` loop example:

~~~jsx
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];

for (let i = 0; i < hobbies.length; i++) {
  console.log(`I enjoy ${hobbies[i]}.`);
}
~~~

Example of a `for...of` loop:

~~~jsx
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];

for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`);
}
~~~

Notice how the `for...of` loop has a simpler syntax, which is good for readability in larger, more complex applications.

Both examples print:

~~~text
I enjoy singing.
I enjoy eating.
I enjoy quidditch.
I enjoy writing.
~~~
---

### Looping in Reverse

Sometimes you want to loop from the **end** of an array back to the **start**.

~~~jsx
const fruits = ["apple", "banana", "cherry", "date"];

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
// date, cherry, banana, apple
~~~

This is especially useful when **removing items** from an array while you iterate, to avoid index issues.

### Iterating Through a string 

The `for...of` loop can also be used to iterate over strings. Here’s an example: 

~~~jsx
const username = 'joe';

for (const char of username) {
  console.log(char);
}
~~~

Which prints this in the terminal:

~~~text
j
o
e
~~~
Notice the similarities between iterating through a string and iterating through an array

---

### Looping Through Arrays

Classic `for` loop over an array:

~~~jsx
const vacationSpots = ["Bali", "Paris", "Tulum"];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}
~~~

Modern patterns (for reference):

~~~jsx
const numbers = [1, 2, 3, 4];

for (const num of numbers) {
  console.log(num * 2);
}

const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
~~~

---

### Nested Loops

A **nested loop** is a loop inside another loop.

Useful when comparing each element of one array with each element of another:

~~~jsx
const bobsFollowers = ["Maya", "Jake", "Zara", "Omar"];
const tinasFollowers = ["Zara", "Nina", "Omar"];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers); // ["Zara", "Omar"]
~~~

> Be careful with nested loops: they can become slow for large arrays because they compare many combinations.

---

### `while` Loops

Use a `while` loop when you **don’t know** in advance how many times you’ll loop.

~~~jsx
const cards = ["diamond", "spade", "heart", "club"];
let currentCard;

while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
~~~

`while` loops evaluate a condition for as long as it’s true, and the looping stops when the condition becomes false.

Make sure the loop condition will eventually become false to avoid **infinite loops**.

---

### `do…while` Loops

A **do…while** loop runs its body **at least once**, then keeps going while a condition is true.

~~~jsx
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded + " cup was added");
} while (cupsAdded < cupsOfSugarNeeded);
~~~

---

### The `break` Keyword

`break` lets you exit a loop **early**.

~~~jsx
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}

console.log("And if you don't know, now you know.");
~~~

Useful for:

- Searching until you find something.
- Stopping once a condition is satisfied.

### The `continue` keyword

`continue` is used to skip one iteration of a loop.

Here’s an example:

~~~jsx
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];

for (const bird of strangeBirds) {
  if (bird === 'Cow') {
    continue;
  }
  console.log(bird);
}
~~~

This will iterate through the array and print out every value except the suspected imposter:

~~~text
Shoebill
Cockatrice
Basan
Terrorbird
Parotia
Kakapo
~~~

#### Use case: reverse `for` loop

~~~jsx
const nums = [1, 2, 3];

for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}

console.log("Time is up!");
~~~

This prints:

~~~text
3
2
1
Time is up!
~~~

This example shows how you can iterate an array in reverse.

---

### Objects

#### Introduction to Objects

An **object** is a **non-primitive** value that groups related data (and optionally behavior) under one variable. Unlike arrays, plain objects are **unordered**: you care about **named properties**, not numeric positions.

Objects store data as **key–value pairs**. Each **key** (also called a **property name**) labels a piece of data; the **value** can be any type (string, number, boolean, array, another object, function, etc.).

![Each key is associated with one value](assets/js-object-key-value-concept.svg)

**Why use objects?**

- Model real-world things (a user, a product, a spaceship) as one structure.
- Pass a single argument into a function instead of many separate variables.
- Keep related settings or API responses in one place.

#### Creating Object Literals

The usual way to create an object is an **object literal**: curly braces `{}` with zero or more properties inside.

~~~jsx
let spaceship = {}; // empty object

let spaceship = {
  "Fuel Type": "diesel",
  color: "silver",
};
~~~

- Keys are often written **without quotes** when they are valid identifiers (`color`).
- Use **quotes** when the key has spaces or special characters (`"Fuel Type"`).

This diagram matches the same idea: the variable holds one **object**; each line inside `{}` is a **property** made of a **key** and a **value**.

![Object literal: keys, values, and properties](assets/js-object-literal-spaceship-properties.svg)

#### Accessing Properties

Use **dot notation** to **read** a property when the key is a valid identifier:

~~~jsx
console.log(spaceship.color); // "silver"
~~~

![Dot notation for accessing object properties](assets/dot-notation-js.svg)

Dot notation exercise — read values from a `spaceship` object:

~~~js
const spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;
~~~

#### Bracket Notation

Use **bracket notation** when the key is not a valid identifier, or when you need a **dynamic** key (variable or expression).

Pass the property name inside square brackets (usually as a string).

![Bracket notation for accessing object properties](assets/objects_lesson_EX4.svg)

Use bracket notation for keys that are not valid identifier names:

```js
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns 'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined
```

You can use a variable inside the brackets — useful in functions:

```js
const key = "color";
console.log(spaceship[key]); // same as spaceship.color when key is "color"

let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'
```

#### Property Assignment

Once an object is defined, you are not stuck with the properties you started with. Objects are **mutable**: you can update them after creation.

Use **dot notation** (`.`) or **bracket notation** (`[]`) with the assignment operator `=` to add a new key–value pair or change an existing property.

![Property assignment](assets/object_property_assignment.svg)

One of two things can happen:

- If a property already exists, its previous value is replaced.
- If there is no property with that name, a new property is added.

**Important:** you cannot reassign a `const` binding to a different object, but you can still **mutate** the object (add or change properties).

~~~jsx
spaceship.color = "gold";
spaceship["Fuel Type"] = "electric";
~~~

```js
const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key 'speed' with value 'Mach 5'
```

Remove a property with **`delete`**:

```js
const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe'
};

delete spaceship.mission;  // Removes the mission property
```

#### Methods

When a function is stored as a value on an object, it is called a **method**. An object’s properties describe what it has (its data), and its methods describe what it does (its behavior).

~~~jsx
const dog = {
  name: "Rex",
  bark() {
    console.log("Woof!");
  },
};

dog.bark(); // "Woof!"
~~~

The `bark()` syntax above is **ES6 method shorthand** on the object literal (equivalent to `bark: function () { ... }`).

Object methods might already feel familiar: `console` is a global object and `log()` is a method; `Math.floor()` is another example.

You can add methods to an object literal with regular key–value pairs (the key is the method name, the value is a function expression).

```js
const alienShip = {
  invade: function () {
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
```

Call a method with the object name, a dot, and the method name with parentheses:

```js
alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'
```

#### Nested Objects

In real applications, objects are often nested. An object can contain another object as a property, and that nested object can have a property that holds an array of more objects.

In a spaceship object, you can add a `crew` object to store the people who run the craft. Each crew member can be its own object with properties like `name` and `degree`, plus role-specific methods. You can nest other objects too (for example `telescope`), or group related details under a parent object.

```js
    const spaceship = {
      telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032
      },
      crew: {
        captain: {
          name: 'Sandra',
          degree: 'Computer Engineering',
          encourageTeam() { console.log('We got this!') }
        }
      },
      engine: {
        model: 'Nimbus2000'
      },
      nanoelectronics: {
        computer: {
          terabytes: 100,
          monitors: 'HD'
        },
        'back-up': {
          battery: 'Lithium',
          terabytes: 50
        }
      }
    };
```

You can chain operators to access nested properties. At each level, choose dot or bracket notation to match the key. Evaluate left to right, like the interpreter:

```js
spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'
```

The computer first evaluates `spaceship.nanoelectronics`, which returns an object containing `back-up` and `computer`. Next, `['back-up']` accesses the `back-up` object. Then `.battery` reads the `battery` property and returns `'Lithium'`.

```js
let spaceship = {
  // Example: key–value pairs in nested objects
  passengers: [{name: 'Space Dog'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
};

let capFave = spaceship.crew.captain['favorite foods'][0];

let firstPassenger = spaceship.passengers[0];

```

#### Pass By Reference

When you pass a variable that holds an object into a function, the parameter refers to the **same object in memory**. Functions that change object properties **mutate** that object permanently, even when the outer variable was declared with `const`.

```js
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(spaceship);

spaceship.color // Returns 'glorious gold'

```

#### Looping Through Objects

You already know how to iterate arrays by index; object key–value pairs are not ordered by position. JavaScript gives you ways to iterate objects, including `for...in` and helpers that return arrays you can use with `for...of`.

**`for...in`** iterates over enumerable **keys** (watch out for inherited keys on plain objects; many style guides prefer the approaches below for “own” properties only).

~~~jsx
const meal = {
  appetizer: "salad",
  main: "pasta",
  dessert: "gelato",
};

for (const key in meal) {
  console.log(`${key}: ${meal[key]}`);
}
~~~

**`Object.keys`**, **`Object.values`**, and **`Object.entries`** give arrays you can loop with `for...of`:

~~~jsx
for (const key of Object.keys(meal)) {
  console.log(key, meal[key]);
}

for (const [key, value] of Object.entries(meal)) {
  console.log(key, value);
}
~~~

##### Quick comparison: arrays vs objects

| | **Array** | **Object** |
|---|-----------|--------------|
| Order | Ordered (indices `0`, `1`, …) | Unordered (named keys) |
| Access | `arr[0]` | `obj.key` or `obj["key"]` |
| Typical use | Lists of similar items | Records, maps, things with named fields |

#### Review

- **Literals** — use `{ }` for object literals; keys and values are **properties**.
- **Access** — **dot notation** for valid identifiers; **bracket notation** for dynamic or non-identifier keys.
- **Assignment** — mutate with `.` or `[]`; `const` still allows changing the object’s contents (not rebinding the variable).
- **Methods** — properties whose values are functions; call with `obj.method()`.
- **Nesting** — chain `.` and `[]` to reach inner values.
- **Pass by reference** — objects passed into functions refer to the same data in memory.
- **Loops** — `for...in`, or `Object.keys` / `Object.values` / `Object.entries` with `for...of`.

For a full chapter recap (arrays, loops, and objects), see **Chapter 4 summary** below.

---

### Advanced Objects

Lesson topics (outline only — add your own notes and examples as you work through the material).

#### Advanced Objects Introduction

How objects behave in more depth: execution context, encapsulation, and common patterns beyond simple literals.

#### The this Keyword

In methods and functions, **`this`** refers to a context (often the object a method was called on). Its value depends on **how** the function is invoked.

Objects in JavaScript are like containers that store data and functionality. This section builds on the fundamentals of creating objects and explores some advanced concepts, such as:

- using the `this` keyword
- conveying privacy in JavaScript methods
- defining getters and setters in objects
- creating factory functions using destructuring techniques

Here's an example of an object using the `this` keyword:
```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet(); 
// Output: herbivore
```
Above is an example of the goat object being used with a makeSound() method. with the this keyword

```js
goat.makeSound(); // Prints baaa
```

#### Arrow Functions and this

For a method, the **calling object** is the object the method belongs to. If we use `this` in a method, then the value of `this` is the calling object. However, it becomes a bit more complicated when we start using arrow functions for methods. Take a look at the example below:
```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};

goat.diet(); // Prints undefined

```
**Arrow functions** do not have their own **`this`** binding; they inherit **`this`** from the surrounding scope. That differs from regular functions and affects how you write methods and callbacks.

Here's an example of the `this` keyword being used correctly with a regular (non-arrow) method:

```js
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());
// Outputs I am 1E78V2 and my current energy level is 100.
```

#### Privacy

Accessing and updating properties is fundamental to working with objects. There are cases, though, where we don't want other code simply accessing and updating an object's properties directly. **Privacy** in objects is the idea that only certain properties should be mutable or able to change in value. Some languages have built-in privacy features, but JavaScript objects do not — instead, we rely on conventions.

Patterns for hiding implementation details: e.g. variables in closures, naming conventions, and (in modern JS) **`#` private fields** on classes. Goal: control what code outside an object can read or change.

```js
const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
robot.recharge();
```

#### Getters

Getters are methods that get and return the internal properties of an object, but they can do more than just retrieve the value of a property.
Here is an example of a getter method:

**Getters** (`get name() { … }` in object literals or classes) let you read a property-like value while running logic behind the scenes.

```js
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
person.fullName; // 'John Doe'

```
Notice that in the getter method above:

We use the get keyword followed by a method name and a function body.
We use an if...else conditional to check if both _firstName and _lastName exist (by making sure they both return truthy values) and then return a different value depending on the result.
We can access the calling object’s internal properties using **this**.
In **fullName**, we’re accessing both **this._firstName** and **this._lastName**.
In the last line, we call **fullName** on **person**. In general, getter methods do not need to be called with parentheses. Syntactically, it looks like we’re accessing a property.
Now that we’ve gone over syntax, let’s discuss some notable advantages of using getter methods:

Getters can perform an action on the data when getting a property.
Getters can return different values using **conditionals**.
In a getter, we can access the properties of the calling object using **this**.
The functionality of our code is easier for other developers to understand.
Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name, like we did in the example above.

Here is another example of a getter:

```js
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() { 
    if (typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log(robot.energyLevel);
```

#### Setters

The same way you use getters, you can create **setter** methods that reassign values on existing properties **within** an object.

**Setters** (`set name(value) { … }`) run when you assign to a property, so you can validate or update related state.

Here’s an example of using a setter:

```js
  const person = {
    _age: 37,
    set age(newAge){
      if (typeof newAge === 'number'){
        this._age = newAge;
      } else {
        console.log('You must assign a number to age');
      }
    }
  };

```
In this example you are performing a check on whatever value is assigned to **this._age**.

Only values of type **`number`** are written to **this._age**.

The logged result depends on which value you assign to **this._age**.

```js
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age
```

Setter methods such as **`age`** are not invoked with parentheses. Syntactically, assigning looks like **`person.age = value`**, similar to assigning a plain property.

As with getters, setters give you advantages such as validating input, running side effects before or after assignments, and making the object’s intended use clear. That said, callers can often still bypass a setter—for example, by assigning to **`person._age`** directly, like this:

```js
person._age = 'forty-five'
console.log(person._age); // Prints forty-five
```

#### Factory Functions

A **factory function** returns a new object (often configured by arguments). Useful for creating many similar objects without `new` or classes.

So far you have been creating objects individually, but sometimes you want to create many instances quickly; that’s what factory functions are for. In the real world, a factory churns out many copies of a product efficiently. Likewise, a **factory function** is a function that returns an object and can be reused to build many instances. Factory functions can take parameters so each returned object can differ.

Suppose you wanted objects to represent monsters in JavaScript. There could be many types of monsters—you could declare each monster by hand—but a factory makes it manageable. The factory accepts parameters that describe each monster.

Here’s an example of a factory function:
```js
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

```
Here is another example—a factory function with two arguments and two properties:

```js
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  };
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();
```

#### Property Value Shorthand

When a variable name matches the property name, you can write **`{ x }`** instead of **`{ x: x }`** in object literals.

ES6 added **property value shorthand**: when an object literal’s property name matches an in-scope variable, you may omit the `: value` and write the identifier once.

Earlier you wrote factory functions that repeated each pair—**`name: name`**, **`age: age`**—even though each key matched the parameter name:

```js
const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};

```

If you add more fields, repeating every pair gets tedious; shorthand keeps the literals shorter. Apply it whenever the parameter (or variable) name is the same as the property key.

Here’s the same factory using shorthand:
```js
const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};
```
#### Destructuring Assignment

**Destructuring assignment** pulls values out of **objects** or **arrays** into variables using a pattern on the left of **`=`**. For objects it looks like **`const { a, b } = obj`**; for arrays, **`const [first, second] = arr`** (this section sticks to object patterns). The same **`{ … }`** pattern appears in **function parameters**, and nesting on the left can mirror nesting on the right (`{ outer: { inner } }`).

**`vampire`**: plain property reads, then destructuring:

```js
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

const residenceManual = vampire.residence;
console.log(residenceManual); // Prints 'Transylvania'

const { residence } = vampire;
console.log(residence); // Prints 'Transylvania'

// Nested: pattern on the left mirrors the object (`preferences` holds `{ day, night }`).
const { preferences: { day, night } } = vampire;
console.log(day); // stay inside
```

You can bind several keys in one pattern; only those names become variables (everything else stays on the object):

```js
const car = { make: 'Toyota', model: 'Camry', year: 2021 };
const { make, model } = car;

console.log(make); // Toyota
console.log(model); // Camry
```

**Another example:** **`functionality`** is a nested object on **`robot`**. Destructuring assigns that whole nested object into a variable **`functionality`**, then you call its methods normally:

```js
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  },
};

const { functionality } = robot;

functionality.beep();
```

#### Built-in Object Methods

Static helpers on **`Object`** (and related APIs), such as **`Object.assign`**, **`Object.freeze`**, **`Object.create`**, **`Object.hasOwn`**, and the **`Object.keys` / `values` / `entries`** family you already use for iteration.

In earlier examples you mostly defined your own objects and methods. Typical **`{}`** literals also get **instance** methods from **`Object.prototype`** (**`hasOwnProperty`**, **`valueOf`**, and others), and **`Object`** exposes **static helpers** such as **`Object.keys`**, **`Object.entries`**, and **`Object.assign`**.

For reference, Mozilla has a consolidated list here: [`Object` constructor methods (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#methods_of_the_object_constructor).

```js
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);
```

Let's review the concepts covered in this lesson:

- The object that a method belongs to is called the **calling object**.
- The **`this`** keyword refers to the calling object and can be used to access properties of the calling object.
- **Methods** do not automatically have access to other internal properties of the calling object.
- The value of `this` depends on where it is being accessed from.
- We cannot use **arrow functions** as methods if we want to access other internal properties via `this`.
- JavaScript **objects** do not have built-in privacy — however, there are conventions to follow to notify other developers about the intent of the code.
- The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
- Setter and getter methods allow for more detailed ways of accessing and assigning properties.
- **Factory functions** allow us to create object instances quickly and repeatedly.
- There are different ways to use object destructuring: one way is property value shorthand, and another is destructured assignment.
- As with any concept, it is a good skill to learn how to use the documentation with objects!

If you want to challenge yourself:

Find the value of this within a method.
Learn the outcome of using a property that has the exact same name as a setter/getter method.
Create a new factory function that can create object instances of your choice.
Read documentation on other destructuring techniques and apply them to your code.
Try out other built-in object methods and learn what they do.

---

## Vocab

- **Array** – an ordered list of values inside `[]`; each item is an **element**.
- **Index** – the position of an element in the array, starting at `0` (think “first seat is seat 0”).
- **Element** – a single value or item stored in an array.
- **Zero-indexed** – the first element is at index `0`.
- **`.length`** – number of elements in an array; often used as a loop bound.
- **`.push()` / `.pop()`** – add to / remove from the **end** of an array (both **mutate** the array).
- **Mutating (destructive) method** – changes the original array in place.
- **Pass by reference** – arrays given to functions refer to the same array; mutations inside the function affect the original.
- **Nested array** – an array that contains other arrays; access with chained `[i][j]` notation.
- **`for` loop** – `for (init; condition; after) { }` repeats while the condition is true.
- **`for...of`** – loop over **values** of an iterable (arrays, strings, etc.).
- **`for...in`** – loop over **keys** of an object (watch inherited keys; prefer `Object.keys` / `Object.entries` for “own” properties when needed).
- **`while` / `do…while`** – repeat while a condition is true; `do…while` runs the body at least once.
- **`break` / `continue`** – exit the loop early / skip the rest of the current iteration.
- **Nested loop** – a loop inside another loop (e.g. compare every element of one array with every element of another).
- **Object** – a non-primitive value grouping **key–value** **properties**; plain objects are **unordered** (named properties, not numeric positions).
- **Property** – a key and its value together on an object.
- **Method** – a property whose value is a **function** (behavior on the object).
- **Object literal** – ` { } ` with zero or more `key: value` pairs.
- **Dot notation** – `obj.key` when the key is a valid identifier.
- **Bracket notation** – `obj["key"]` or `obj[variable]` for dynamic or non-identifier keys.
- **`Object.keys` / `Object.values` / `Object.entries`** – produce arrays you can loop with `for...of`.

---

## Important notes

> **Questions:** Write important questions you have in a box like this.

- Arrays are **ordered** and **zero‑indexed**; strings can be iterated character by character with `for...of`.
- **`const`** arrays cannot be **reassigned**, but their **contents** can still be **mutated** (e.g. index assignment, `push`, `pop`).
- Prefer **reverse `for` loops** when removing items while iterating to avoid index bugs.
- **`while`** loops need a condition that eventually becomes **false** to avoid **infinite loops**.
- **`break`** stops the whole loop; **`continue`** skips to the **next iteration**.
- **Nested loops** can get slow on large data (many comparisons).
- **Objects** model “things” with named fields; choose **arrays** for ordered lists and **objects** for records / maps.

---

## Chapter 4 summary

When you review your notes, briefly summarize what you learned and what is important to retain from the full page of notes. That helps you internalize the information.

- **Arrays** store ordered lists of values and are zero‑indexed.
- Use `.length`, `.push()`, `.pop()`, and bracket notation `[]` to work with array data.
- Arrays are **mutable** and passed by **reference**, so functions can change them.
- **Nested arrays** let you build more complex data structures.
- **Loops** (`for`, `while`, `do…while`, nested loops) let you repeat actions efficiently.
- `break` lets you exit a loop early once a condition is met; `continue` skips the rest of one iteration.
- **Objects** group data as **key–value** **properties**; use **`{}`** for literals.
- Read and update properties with **dot notation** or **bracket notation**; loop with **`for...in`** or **`Object.keys` / `Object.entries`**.
- **Advanced objects** (later): **`this`**, getters/setters, privacy patterns, factory functions, shorthand and destructuring, and built-in **`Object`** methods.
