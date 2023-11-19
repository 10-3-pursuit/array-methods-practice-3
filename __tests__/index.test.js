describe("pokemonNames", () => {
  test("should return an array of names", () => {
    expect(pokemonNames()).toContain("Bulbasaur");
    expect(pokemonNames()).toContain("Charmander");
  });

  test("should have the correct length", () => {
    expect(pokemonNames()).toHaveLength(10);
  });
});

describe("waterTypePokemons", () => {
  test("should include water type Pokémon", () => {
    expect(waterTypePokemons()).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: "Squirtle" })])
    );
  });

  test("should not include non-water type Pokémon", () => {
    expect(waterTypePokemons()).not.toEqual(
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
    expect(countTackleMove()).toBe(4);
  });

  test("should not count Pokémon without the move", () => {
    expect(countTackleMove()).not.toBe(pokemons.length);
  });
});

describe("allMoves", () => {
  test("should include specific moves", () => {
    expect(allMoves()).toEqual(expect.arrayContaining(["Tackle", "Growl"]));
  });

  test("should be a unique list of moves", () => {
    const moves = allMoves();
    expect(new Set(moves)).toHaveLength(moves.length);
  });
});

describe("pokemonWithGrowl", () => {
  test("should filter Pokémon with Growl", () => {
    expect(pokemonWithGrowl()).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: "Charmander" })])
    );
  });

  test("should not include Pokémon without Growl", () => {
    expect(pokemonWithGrowl()).not.toEqual(
      expect.arrayContaining([expect.objectContaining({ name: "Dragonite" })])
    );
  });
});

describe("firstWaterGunPokemon", () => {
  test("should find the first Pokémon with Water Gun", () => {
    expect(firstWaterGunPokemon()).toEqual(
      expect.objectContaining({ name: "Squirtle" })
    );
  });

  test("should return undefined if no Pokémon has Water Gun", () => {
    // Assuming a modified dataset where no Pokémon has 'Water Gun'
    expect(firstWaterGunPokemon()).toBeUndefined();
  });
});

describe("pokemonImages", () => {
  test("should include specific image URLs", () => {
    expect(pokemonImages()).toContain("http://example.com/bulbasaur.png");
  });

  test("should have the correct length", () => {
    expect(pokemonImages()).toHaveLength(10);
  });
});

describe("groupByType", () => {
  test("should group Pokémon correctly", () => {
    const grouped = groupByType();
    expect(Object.keys(grouped)).toContain("water");
    expect(grouped["water"]).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: "Squirtle" })])
    );
  });

  test("should not include incorrect types", () => {
    const grouped = groupByType();
    expect(Object.keys(grouped)).not.toContain("unknown");
  });
});

describe("findPokemonIndexByName", () => {
  test("should find the correct index for Pikachu", () => {
    expect(findPokemonIndexByName("Pikachu")).toBe(3);
  });

  test("should return -1 for a non-existent Pokémon", () => {
    expect(findPokemonIndexByName("NonExistent")).toBe(-1);
  });
});
