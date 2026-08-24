# JavaScript Fundamentals — Practice Repo

This is a **practice folder for revising JavaScript concepts and logic**, built while working through the Full Stack (JavaScript) career path. It's not a production app — it's a scratchpad for drilling core JS syntax, patterns, and small exercises so the ideas stick.

**Start here:** [00-START-HERE.md](00-START-HERE.md)

## How it's organized

- **`notes.md`**
  Full lesson explanations, vocab, and review notes for all 8 lessons (HTML/CSS foundations through Node/Express/PostgreSQL), plus a table of useful built-in methods.

- **`demo/01-intro-js/` through `demo/08-node-express-and-postgresql/`**
  One folder per lesson topic, each containing an `index.js` (or `index.html` + `index.js` where the DOM is involved) with runnable code for that concept (variables, functions, arrays/objects, async/APIs, Express, etc.). Folders are numbered in the order the topics were covered.

- **`demo/practice.js`**
  A single scratch file with numbered practice problems (e.g. `1a`, `1b`, `2a`...) matching the lesson topics above. Each problem is worked through directly beneath its prompt comment.

- **`assets/`**
  Shared screenshots and diagrams referenced from `notes.md`.

## Running it

Most lessons run directly with Node from the `demo/` folder:

```bash
node demo/01-intro-js/index.js
node demo/practice.js
```

Lesson 05 (DOM and Events) needs a browser — open `demo/05-js-dom-and-events/index.html` directly.

Lesson 08 (Express/PostgreSQL) needs dependencies installed first:

```bash
npm install express pg
node demo/08-node-express-and-postgresql/index.js
```

Lesson 07 (React/Redux) is reference pseudo-code only — scaffold a real app (e.g. Vite) to actually run it.
