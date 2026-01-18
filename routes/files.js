const express = require("express");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const bcrypt = require("bcrypt");
const db = require("../db");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), async (req, res) => {
  const id = uuidv4();
  const expiresIn = parseInt(req.body.expiresIn) || 24; // ساعات
  const password = req.body.password || null;
  const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

  const expiryDate = new Date(Date.now() + expiresIn * 60 * 60 * 1000).toISOString();

  db.run(
    `INSERT INTO files (id, originalName, filename, size, password, expiresAt)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [id, req.file.originalname, req.file.filename, req.file.size, hashedPassword, expiryDate]
  );

  res.json({
    message: "File uploaded successfully",
    downloadLink: `${req.protocol}://${req.get("host")}/api/files/${id}`
  });
});

router.get("/:id", async (req, res) => {
  db.get(`SELECT * FROM files WHERE id = ?`, [req.params.id], async (err, file) => {
    if (!file) return res.status(404).json({ error: "File not found" });

    const now = new Date();
    if (new Date(file.expiresAt) < now) {
      return res.status(410).json({ error: "Link expired" });
    }

    if (file.password) {
      const password = req.query.password;
      if (!password || !(await bcrypt.compare(password, file.password))) {
        return res.status(401).json({ error: "Invalid password" });
      }
    }

    res.download(`uploads/${file.filename}`, file.originalName);
  });
});

module.exports = router;
