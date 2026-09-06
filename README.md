# JavaScript Fundamentals — Practice Repo

This is a **practice folder for revising JavaScript concepts and logic**, built while working through the Full Stack (JavaScript) career path. It's not a production app — it's a scratchpad for drilling core JS syntax, patterns, and small exercises so the ideas stick.

**Start here:** [00-START-HERE.md](00-START-HERE.md)

## How it's organized

- **`notes.md`**
  Full lesson explanations, vocab, and review notes for all 8 lessons (HTML/CSS foundations through Node/Express/PostgreSQL), plus a table of useful built-in methods.

- **`Building interactive websites/`**
  The JavaScript lessons are grouped into `Part 1/` (syntax, functions,
  arrays, objects, and iterators) and `Part 2/` (DOM, asynchronous APIs,
  React/Redux, and Node/Express/PostgreSQL). Each topic has a named folder
  containing `index.js` and a matching `practice-[lesson-name].js` file with
  three practice sections and three examples in each section.

- **`Making A Website Accessible/`**
  The next course section covers accessibility fundamentals, semantic HTML,
  accessible forms, visual design, and accessibility testing.

- **`practice.js`**
  A single scratch file with numbered practice problems (e.g. `1a`, `1b`, `2a`...) matching the lesson topics above. Each problem is worked through directly beneath its prompt comment.

- **`assets/`**
  Shared screenshots and diagrams referenced from `notes.md`.

## Running it

Most lessons run directly with Node from the repository root:

```bash
node "Building interactive websites/Part 1/Introduction to JavaScript/index.js"
node practice.js
```

Lesson 05 (DOM and Events) needs a browser — open
`Building interactive websites/Part 2/DOM and Events/index.html`
directly.

Lesson 08 (Express/PostgreSQL) needs dependencies installed first:

```bash
npm install express pg
node "Building interactive websites/Part 2/Node Express and PostgreSQL/index.js"
```

Lesson 07 (React/Redux) is reference pseudo-code only — scaffold a real app (e.g. Vite) to actually run it.
