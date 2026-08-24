// Topic: Node, Express, and PostgreSQL
// From 08-Node-Express-and-PostgreSQL.md

console.log("Hello, World!");

// Node-only global (not available in the browser):
console.log(process.env.PWD);

// --- Express (requires `npm install express` in this folder) ---
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// --- PostgreSQL (requires a running Postgres instance + `npm install pg`) ---
// const { Pool } = require("pg");
// const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// const result = await pool.query("SELECT NOW()");
