const fs = require("fs");
const path = require("path");

const allMenu = require("../data/AllMenu.json");

const getDishes = (req, res, next) => {
  const filePath = path.join(__dirname, "../data/allMenu.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Parse the JSON data and send it as a response
      //   const jsonData = JSON.parse(allMenu);
      res.json(allMenu);
    }
  });
};

exports.getDishes = getDishes;
