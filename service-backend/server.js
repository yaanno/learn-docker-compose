import express from "express";
import sqlite3 from "sqlite3";
const app = express();
const port = 8080;
import cors from "cors";

// Connect to SQLite database
const db = new sqlite3.Database(":memory:");

// Create a table and insert some data
db.serialize(() => {
  db.run("CREATE TABLE items (id INT, name TEXT)");
  db.run(
    'INSERT INTO items (id, name) VALUES (1, "Item 1"), (2, "Item 2"), (3, "Item 3")'
  );
});

// app.use(
//   cors({
//     origin: "http://localhost:4000",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );

// API endpoint to get items
app.get("/api/items", (req, res) => {
  db.all("SELECT * FROM items", (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${8080}`);
});
