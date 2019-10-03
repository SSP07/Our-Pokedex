const express = require("express");
const fs = require("fs");
const path = require("path");
const util = require("util");

const app = express();
const port = 4000;
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

app.use(express.json());
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "ourPokedex.html"));
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
