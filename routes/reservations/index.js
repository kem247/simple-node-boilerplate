const express = require("express");
const router = express.Router();
const { Reservation } = require("../../models");

router.get("/", async (req, res) => {
  console.log("Hi");
  res.json(await Reservation.all());
});

router.post("/", async (req, res) => {
  let pastDate = await { slot: req.body };
  res.json(pastDate);
});

module.exports = router;
