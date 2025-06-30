import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const app = express();
app.use(cors());
app.use(express.json());

// buka database sqlite
let db;
(async () => {
  db = await open({
    filename: "./data.db",
    driver: sqlite3.Database,
  });

  await db.run(`
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price INTEGER NOT NULL
    )
  `);
})();

// GET semua data
app.get("/api/items", async (req, res) => {
  const items = await db.all("SELECT * FROM items");
  res.json(items);
});

// POST tambah data
app.post("/api/items", async (req, res) => {
  const { name, price } = req.body;
  const result = await db.run(
    "INSERT INTO items (name, price) VALUES (?, ?)",
    [name, price]
  );
  res.json({ id: result.lastID, name, price });
});

// PUT update data
app.put("/api/items/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  await db.run(
    "UPDATE items SET name = ?, price = ? WHERE id = ?",
    [name, price, id]
  );
  res.json({ id, name, price });
});

// DELETE data
app.delete("/api/items/:id", async (req, res) => {
  const { id } = req.params;
  await db.run("DELETE FROM items WHERE id = ?", id);
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
