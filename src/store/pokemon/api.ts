const baseUrl = `https://pokeapi.co/api/v2`;

const getPokemons = async () => {
  const response = await fetch(`${baseUrl}/pokemon`);
  const data = await response.json();
  return data;
};

const getPokemonDetails = async (name: string) => {
  const response = await fetch(`${baseUrl}/pokemon/${name}`);
  const data = await response.json();
  return data;
};

export const pokemonAPI = {
  getPokemons,
  getPokemonDetails,
};
