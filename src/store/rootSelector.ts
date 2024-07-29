import slices from "./slices";

const selector = (slice: any) => (state: any) => state[slice.name];

export const pokemonSelector = selector(slices.pokemonSlice);
