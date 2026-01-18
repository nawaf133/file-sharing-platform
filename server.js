require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const fileRoutes = require("./routes/files");

const app = express();
app.use(cors());
app.use(express.json());

// Serve the client folder at root
app.use("/", express.static(path.join(__dirname, "client")));

// API routes
app.use("/api/files", fileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
