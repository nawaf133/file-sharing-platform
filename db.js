const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./files.db");

db.run(`
  CREATE TABLE IF NOT EXISTS files (
    id TEXT PRIMARY KEY,
    originalName TEXT,
    filename TEXT,
    size INTEGER,
    password TEXT,
    expiresAt DATETIME,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

module.exports = db;
