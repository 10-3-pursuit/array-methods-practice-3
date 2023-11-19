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

const pokemonNames = pokemons.map((pokemon) => pokemon.name);
console.log(pokemonNames);

/**
 * Finds all water type Pokémon.
 * @returns {Object[]} An array of water type Pokémon.
 */
const waterTypePokemons = pokemons.filter((pokemon) =>
  pokemon.description.includes("water")
);

/**
 * Finds a Pokémon with a specific ID.
 * @param {number} id - The ID of the Pokémon to find.
 * @returns {Object|null} The Pokémon object if found, otherwise null.
 */
const findPokemonById = (id) => pokemons.find((pokemon) => pokemon.id === id);

/**
 * Counts how many Pokémon have the move 'Tackle'.
 * @returns {number} The count of Pokémon with 'Tackle' move.
 */
const countTackleMove = pokemons.reduce(
  (count, pokemon) => (pokemon.moves.includes("Tackle") ? count + 1 : count),
  0
);

/**
 * Creates an array of all unique moves.
 * @returns {string[]} An array of unique Pokémon moves.
 */
const allMoves = [...new Set(pokemons.flatMap((pokemon) => pokemon.moves))];

/**
 * Filters Pokémon that have the move 'Growl'.
 * @returns {Object[]} An array of Pokémon with 'Growl' move.
 */
const pokemonWithGrowl = pokemons.filter((pokemon) =>
  pokemon.moves.includes("Growl")
);

/**
 * Finds the first Pokémon with the move 'Water Gun'.
 * @returns {Object|null} The first Pokémon with 'Water Gun' move, or null if not found.
 */
const firstWaterGunPokemon = pokemons.find((pokemon) =>
  pokemon.moves.includes("Water Gun")
);

/**
 * Creates an array of URLs of the Pokémon images.
 * @returns {string[]} An array of image URLs.
 */
const pokemonImages = pokemons.map((pokemon) => pokemon.image);

/**
 * Creates an object grouping Pokémon by their type.
 * @returns {Object} An object with keys as types and values as arrays of Pokémon.
 */
const groupByType = pokemons.reduce((group, pokemon) => {
  const type = pokemon.description.split(" ")[2];
  group[type] = group[type] || [];
  group[type].push(pokemon);
  return group;
}, {});

/**
 * Calculates the average ID of all Pokémon.
 * @returns {number} The average ID.
 */
const averageId =
  pokemons.reduce((total, pokemon) => total + pokemon.id, 0) / pokemons.length;

/**
 * Finds the index of a Pokémon in the array based on its name.
 * @param {string} name - The name of the Pokémon to find.
 * @returns {number} The index of the Pokémon in the array, or -1 if not found.
 */
const findPokemonIndexByName = () => {};

module.exports = {
  pokemonNames,
  pokemonImages,
  pokemonWithGrowl,
  waterTypePokemons,
  findPokemonById,
  findPokemonIndexByName,
  countTackleMove,
  allMoves,
  firstWaterGunPokemon,
  groupByType,
  averageId,
};
