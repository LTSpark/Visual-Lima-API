// Add Express
const express = require("express");

// Initialize Express
const app = express();

app.use(cors);

app.post("/aws-core", (req, res) => {
  res.send(req.body)
});

app.post("/aws-core/data", (req, res) => {
  res.send(req.body)
});

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Initialize server
app.listen(3000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;