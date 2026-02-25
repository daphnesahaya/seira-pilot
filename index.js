const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ ADD THIS ROUTE
app.post("/api/submit", (req, res) => {
  console.log("Form submitted:", req.body);
  res.json({ success: true });
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("SEIRA SERVER DEFINITELY RUNNING ON PORT 3000");
});