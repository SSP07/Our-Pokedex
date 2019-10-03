console.log("ijqbeflkjbwneflkjbqwefljkhbnqewfd");

// fetch("/pokemon?id=34")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });

async function searchPokemon(id) {
  const data = await fetch(`pokemon?id=${id}`);
  const parsedData = await data.json();
  console.log(parsedData);
}

searchPokemon(76);
