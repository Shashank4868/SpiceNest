const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
const authController = require("../controllers/auth-controllers");

router.post("/login", authController.login);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  authController.signup
);

module.exports = router;
