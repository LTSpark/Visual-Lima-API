// Add Express
const express = require("express");
const cors = require("cors")

// Initialize Express
const app = express();

app.use(cors());

app.post("/aws-core", (req, res) => {
  res.send(req.body);
});

app.post("/aws-core/data", (req, res) => {
  res.send(req.body);
});

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Initialize server
app.listen(3000, () => {
  console.log("Running on port 3000.");
});

// Export the Express API
module.exports = app;