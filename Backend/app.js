const fs = require("fs");

const express = require("express");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth-routes");
const hotelRoutes = require("./routes/hotel-routes");
const HttpError = require("./models/http-error");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

app.use("/uploads/images", express.static("uploads/images"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // * => allow all domains
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization" // * => allow all headers
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE"); // * => allow all methods
  next();
});

app.use("/auth", authRoutes);
app.use("/hotel", hotelRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@nodejs.lqssxyi.mongodb.net/${process.env.DB_NAME}`
  )
  .then(() => {
    app.listen(5000);
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
