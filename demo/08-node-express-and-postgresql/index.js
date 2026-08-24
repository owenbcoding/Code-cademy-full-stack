// Topic: Node, Express, and PostgreSQL
// Requires `npm install express pg` in this folder to actually run.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// PostgreSQL example (requires a running Postgres instance + `pg`):
//
// const { Pool } = require("pg");
// const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// const result = await pool.query("SELECT NOW()");
