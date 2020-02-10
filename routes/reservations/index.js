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
router.post("/:id", async (req, res, next) => {
  try {
    console.log("BODY", req.params);
    const form = await Reservation.create({
      id: req.params.id,
      name: req.params.name,
      slot: req.params.slot
    });
    res.json(form);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
