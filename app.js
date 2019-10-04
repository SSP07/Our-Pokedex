const express = require("express");
const fs = require("fs");
const path = require("path");
const util = require("util");

const app = express();
const port = 4000;
const readFile = util.promisify(fs.readFile);
//const writeFile = util.promisify(fs.writeFile);

app.use(express.json());
app.use(express.static("public"));

app.get("/pokemon", async function (req, res, next) {
  const {
    name = "", id
  } = req.query;
  const data = await readFile(path.join(__dirname, "pokedex.json"));
  const pokemon = JSON.parse(data).find(item => {
    return item.pkdx_id == id || item.name.toLowerCase() == name.toLowerCase();
  });
  if (!pokemon) {
    res.send({
      success: false,
      payload: "No Pokémon found!"
    })
    return;
  }
  res.send({
    success: true,
    payload: pokemon
  });
  // const index = pokemon.findIndex(
  //   pokemon =>
  //     pokemon.pkdx_id == id || pokemon.name.toLowerCase() == name.toLowerCase()
  // );
  // res.send(pokemon[index]);

});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "ourPokedex.html"));
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});