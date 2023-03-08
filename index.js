require('dotenv').config();

// Add Express
const express = require("express");
const cors = require("cors");

const { getLast, getAll, create } = require("./slot-service");
const { mongooseConnection } = require("./config");

// Initialize Express
const app = express();

mongooseConnection();

app.use(cors());
app.use(express.json());

app.post("/aws-core", async (req, res) => {
  console.log(req.body);
  res.send(await create(req.body));
});

app.post("/aws-core/data", async (req, res) => {
  console.log(req.body);
  res.send(await create(req.body));
});

app.get("/slots/last", async (req, res) => {
  res.send(await getLast())
})

app.get("/slots", async (req, res) => {
  res.send(await getAll());
});

// Initialize server
app.listen(process.env.PORT, () => {
  console.log("Running on port 3000.");
});

// Export the Express API
module.exports = app;
