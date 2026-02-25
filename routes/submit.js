import express from "express";
import { saveResponse } from "../db/db.js";

const router = express.Router();

router.post("/api/submit", (req, res) => {
  try {
    saveResponse(req.body);
    res.json({ status: "ok" });
  } catch (err) {
    console.error("API submit error:", err);
    res.status(500).json({ status: "error" });
  }
});

export default router;