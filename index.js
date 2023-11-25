const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    image: "http://example.com/bulbasaur.png",
    description: "A grass type Pokémon.",
    moves: ["Tackle", "Growl", "Vine Whip"],
  },
  {
    id: 2,
    name: "Charmander",
    image: "http://example.com/charmander.png",
    description: "A fire type Pokémon.",
    moves: ["Scratch", "Growl", "Ember"],
  },
  {
    id: 3,
    name: "Squirtle",
    image: "http://example.com/squirtle.png",
    description: "A water type Pokémon.",
    moves: ["Tackle", "Tail Whip", "Water Gun"],
  },
  {
    id: 4,
    name: "Pikachu",
    image: "http://example.com/pikachu.png",
    description: "An electric type Pokémon.",
    moves: ["Quick Attack", "Growl", "Thunder Shock"],
  },
  {
    id: 5,
    name: "Jigglypuff",
    image: "http://example.com/jigglypuff.png",
    description: "A fairy type Pokémon.",
    moves: ["Sing", "Pound", "Growl"],
  },
  {
    id: 6,
    name: "Meowth",
    image: "http://example.com/meowth.png",
    description: "A normal type Pokémon.",
    moves: ["Scratch", "Growl", "Bite"],
  },
  {
    id: 7,
    name: "Psyduck",
    image: "http://example.com/psyduck.png",
    description: "A water type Pokémon.",
    moves: ["Scratch", "Tail Whip", "Water Gun"],
  },
  {
    id: 8,
    name: "Eevee",
    image: "http://example.com/eevee.png",
    description: "A normal type Pokémon.",
    moves: ["Tackle", "Tail Whip", "Quick Attack"],
  },
  {
    id: 9,
    name: "Snorlax",
    image: "http://example.com/snorlax.png",
    description: "A normal type Pokémon.",
    moves: ["Tackle", "Amnesia", "Rest"],
  },
  {
    id: 10,
    name: "Dragonite",
    image: "http://example.com/dragonite.png",
    description: "A dragon type Pokémon.",
    moves: ["Wrap", "Leer", "Thunder Wave"],
  },
];

/**
 * Creates an array containing only the names of the Pokémon.
 * @returns {string[]} An array of Pokémon names.
 */
const pokemonNames = () => {
  return pokemons.map((ele) => ele.name);
};
// console.log(pokemonNames(pokemons));
/**
 * Finds all water type Pokémon.
 * @returns {Object[]} An array of water type Pokémon.
 */
const waterTypePokemons = () => {
  // use .filter to find object of the pokemon with the description of a water type
  return pokemons.filter(
    (poke) => poke.description === "A water type Pokémon."
  );
};

// console.log(waterTypePokemons(pokemons));
/**
 * Finds a Pokémon with a specific ID.
 * @param {number} id - The ID of the Pokémon to find.
 * @returns {Object|null} The Pokémon object if found, otherwise null.
 */
const findPokemonById = (id) => {
  // use the .find method to locate the pokemon object by the inserted ID
  // remember inside of the array are objects so we must dot into the object using the key of id
  return pokemons.find((ele) => ele.id === id);
};

// console.log(findPokemonById(6));
/**
 * Counts how many Pokémon have the move 'Tackle'.
 * @returns {number} The count of Pokémon with 'Tackle' move.
 */
const countTackleMove = () => {
  // let count = 0;

  // pokemons.filter((ele) => {
  //   if (ele.moves.includes("Tackle")) {
  //     count++;
  //     // return count;
  //   }
  // });
  // return count;
  let count = 0;
  pokemons.forEach((ele) => {
    if (ele.moves.includes("Tackle")) {
      count++;
    }
  });
  return count;
};

// console.log(countTackleMove());
/**
 * Creates an array of all unique moves.
 * @returns {string[]} An array of unique Pokémon moves.
 */
const allMoves = () => {
  // use map to create an array of all of the moves
  // MAP => (Make Array Please)
  const pokeMoves = pokemons.map((ele) => ele.moves).flat();
  // remove any duplicates from the array making it an array of unique moves
  // sort the moves in alphabetical order
  const uniquePokeMoves = [...new Set(pokeMoves)].sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else return 0;
  });
  // return the newly sorted array of unique moves
  return uniquePokeMoves;
};

// console.log(allMoves());
/**
 * Filters Pokémon that have the move 'Growl'.
 * @returns {Object[]} An array of Pokémon with 'Growl' move.
 */

const pokemonWithGrowl = () => {
  return pokemons.filter((ele) => ele.moves.includes("Growl"));
};
// console.log(pokemonWithGrowl());

/**
 * Finds the first Pokémon with the move 'Water Gun'.
 * @returns {Object|null} The first Pokémon with 'Water Gun' move, or null if not found.
 */
const firstWaterGunPokemon = () => {
  // Use the find() method to search for the first Pokémon with 'Water Gun' move
  const found = pokemons.find((ele) => ele.moves.includes("Water Gun"));

  // Check if a Pokémon with 'Water Gun' move was found
  if (!found) {
    // If not found, return null
    return null;
  }

  // Return the first Pokémon found with 'Water Gun' move
  return found;
};

// console.log(firstWaterGunPokemon());
/**
 * Creates an array of URLs of the Pokémon images.
 * @returns {string[]} An array of image URLs.
 */
const pokemonImages = () => {
  return pokemons.map((ele) => ele.image);
};
// console.log(pokemonImages());
/**
 * Calculates the average ID of all Pokémon.
 * @returns {number} The average ID.
 */
const averageId = () =>
  Math.floor(
    (average =
      pokemons.map((ele) => ele.id).reduce((acc, curr) => acc + curr, 0) /
      pokemons.length)
  );
// return Math.floor(average);
// return pokemons.reduce((acc, curr) => acc.id + curr.id, 0) / pokemons.length;
// console.log(averageId());
module.exports = {
  pokemonNames,
  pokemonImages,
  pokemonWithGrowl,
  waterTypePokemons,
  findPokemonById,
  countTackleMove,
  allMoves,
  firstWaterGunPokemon,
  averageId,
};
