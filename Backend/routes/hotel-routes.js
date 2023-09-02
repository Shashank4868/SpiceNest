const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
const hotelControllers = require("../controllers/hotel-controllers");

const checkAuth = require("../middleware/check-auth");

router.use(checkAuth);

router.get("/order/user/:uid", hotelControllers.getOrdersByUserId);

router.post(
  "/order/:uid",
  [
    check("total").not().isEmpty(),
    check("phone").isLength({ min: 10, max: 10 }),
    check("address").not().isEmpty(),
  ],
  hotelControllers.orderItemsByUserId
);

module.exports = router;
