const express = require("express");
const helmet = require("helmet");
const db = require("../data/connection");

const carsRouter = require("../cars/cars-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.send(`<h1> It's working </h1>`);
});

// server.post("/api/cars", (req, res) => {
//   const carsData = req.body;
//   console.log(carsData);

//   db("Cars")
//     .insert(req.body)
//     .then((ids) => {
//       res.status(201).json({ data: ids });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ message: err.message });
//     });
// });

module.exports = server;
