const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
const authController = require("../controllers/auth-controllers");

router.post("/login", authController.login);

router.post(
  "/signup",
  [
    check("email").normalizeEmail().isEmail(),
    check("name").notEmpty(),
    check("password").isLength({ min: 8 }),
  ],
  authController.signup
);

module.exports = router;
