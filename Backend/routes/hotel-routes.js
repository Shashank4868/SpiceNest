const express = require("express");

const router = express.Router();
const hotelControllers = require("../controllers/hotel-controllers");

const HttpError = require("../models/http-error");

router.get("/", hotelControllers.getDishes);

router.get("/menu", (req, res, next) => {
  console.log("Menu route");
});

module.exports = router;
