const express = require("express");
const fs = require("fs");
const path = require("path");
const util = require("util");
const ourPokedex = express();
const port = 4000;
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
ourPokedex.use(express.json());
ourPokedex.use(express.static("public"));

ourPokedex.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "ourPokedex.html"));
});

ourPokedex.listen(port, () => {
  console.log(`listening to port ${port}`);
});
