import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "clarity.db");
const db = new Database(dbPath);

db.prepare(`
  CREATE TABLE IF NOT EXISTS responses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TEXT,
    language TEXT,
    answer1 TEXT,
    answer2 TEXT,
    answer3 TEXT,
    callbackRequested INTEGER
  )
`).run();

export function saveResponse(data) {
  const stmt = db.prepare(`
    INSERT INTO responses (
      timestamp, language, answer1, answer2, answer3, callbackRequested
    ) VALUES (?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    new Date().toISOString(),
    data.language,
    data.answer1,
    data.answer2,
    data.answer3,
    data.callbackRequested ? 1 : 0
  );
}