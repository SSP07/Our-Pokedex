// console.log("ijqbeflkjbwneflkjbqwefljkhbnqewfd");

// fetch("/pokemon?id=34")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });


async function searchPokemonByID() {
  const id = document.getElementById("pokemonSearch").value;
  const data = await fetch(`pokemon?id=${id}`);
  const {
    success,
    payload
  } = await data.json();
  if (success) {
    showPokemon([payload]);
  }
}

async function searchPokemonByName() {
  const name = document.getElementById("pokemonSearch").value;
  const data = await fetch(`pokemon?name=${name}`);
  const {
    success,
    payload
  } = await data.json();
  if (success) {
    showPokemon([payload]);
  }
}

function showPokemon(pokemon) {
  document.getElementById("description").innerHTML = pokemon.map(
    item => `${item.description}`
  ).join("");
  document.getElementById("nameAndID").innerHTML = pokemon.map(
    item => `Name: ${item.name} ID: ${item.pkdx_id}`
  ).join("");

}