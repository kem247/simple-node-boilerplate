const path = require("path");
const express = require("express");
const router = express.Router();
const { Reservation } = require("../../models");
const app = express();
const bodyParser = require("body-parser");
bodyParser.urlencoded();
app.set("js", path.join(__dirname, "js"));

router.get("/", async (req, res) => {
  console.log("Hi");
  res.json(await Reservation.all());
});

router.get("/:id", async (req, res) => {
  let formId = await Reservation.findByPk(req.params.id);
  res.json(formId);
});
router.post("/book", async (req, res, next) => {
  try {
    console.log("BODY", req.params);
    const reservation = await Reservation.add({
      name: req.body.name,
      slot: req.body.slot
    });
    res.json(reservation);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
