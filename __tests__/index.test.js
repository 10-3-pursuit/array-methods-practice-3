const {
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
} = require("../");

describe("pokemonNames", () => {
  test("should return an array of names", () => {
    expect(pokemonNames).toContain("Bulbasaur");
    expect(pokemonNames).toContain("Charmander");
  });

  test("should have the correct length", () => {
    expect(pokemonNames).toHaveLength(10);
  });
});

describe("waterTypePokemons", () => {
  test("should include water type Pokémon", () => {
    expect(waterTypePokemons).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: "Squirtle" })])
    );
  });

  test("should not include non-water type Pokémon", () => {
    expect(waterTypePokemons).not.toEqual(
      expect.arrayContaining([expect.objectContaining({ name: "Bulbasaur" })])
    );
  });
});

describe("findPokemonById", () => {
  test("should find Pokémon with ID 1", () => {
    expect(findPokemonById(1)).toEqual(
      expect.objectContaining({ name: "Bulbasaur" })
    );
  });

  test("should return undefined for an invalid ID", () => {
    expect(findPokemonById(999)).toBeUndefined();
  });
});

describe("countTackleMove", () => {
  test("should count correctly", () => {
    expect(countTackleMove).toBe(4);
  });
});

describe("allMoves", () => {
  test("should include specific moves", () => {
    expect(allMoves).toEqual(expect.arrayContaining(["Tackle", "Growl"]));
  });
});

describe("pokemonWithGrowl", () => {
  test("should filter Pokémon with Growl", () => {
    expect(pokemonWithGrowl).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: "Charmander" })])
    );
  });

  test("should not include Pokémon without Growl", () => {
    expect(pokemonWithGrowl).not.toEqual(
      expect.arrayContaining([expect.objectContaining({ name: "Dragonite" })])
    );
  });
});

describe("firstWaterGunPokemon", () => {
  test("should find the first Pokémon with Water Gun", () => {
    expect(firstWaterGunPokemon).toEqual(
      expect.objectContaining({ name: "Squirtle" })
    );
  });
});

describe("pokemonImages", () => {
  test("should have the correct length", () => {
    expect(pokemonImages).toHaveLength(10);
  });
});
