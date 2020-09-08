const express = require("express");
const knex = require("knex");

const db = require("../data/connection");

const router = express.Router();

router.get("/", (req, res) => {
  db("Cars")
    .then((cars) => {
      res.status(200).json({ data: cars });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.post("/", (req, res) => {
  const carsData = req.body;
  console.log(carsData);

  db("Cars")
    .insert(req.body)
    .then((ids) => {
      res.status(201).json({ data: ids });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
