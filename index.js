require('dotenv').config();

// Add Express
const express = require("express");
const cors = require("cors");

const { getLast, getAll, create, viewStats } = require("./stats.service");
const { mongooseConnection } = require("./config");

// Initialize Express
const app = express();

mongooseConnection();

app.use(cors());
app.use(express.json());

app.post("/stats", async (req, res) => {
  console.log(req.body);
  res.send(await create(req.body));
});

app.get("/stats/last", async (req, res) => {
  res.send(await getLast())
})

app.get("/stats", async (req, res) => {
  res.send(await getAll());
});

app.get("/stats/view", async (req, res) => {
  res.send(await viewStats());
});

// Initialize server
app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}...`);
});

// Export the Express API
module.exports = app;
