import { createSelector } from "@reduxjs/toolkit";
import { pokemonSelector } from "@store/rootSelector";

export const selectPokemons = createSelector(
  pokemonSelector,
  (slicedState: any) => {
    try {
      return slicedState.pokemons;
    } catch (e) {
      return [] as any;
    }
  }
);

export const selectPokemoDetailed = createSelector(
  pokemonSelector,
  (slicedState: any) => {
    try {
      return slicedState.pokemonDetails;
    } catch (e) {
      return {} as any;
    }
  }
);

export const selectPokemnAbilitiesLog = createSelector(
  pokemonSelector,
  (slicedState: any) => {
    try {
      return slicedState.abilitiesLog;
    } catch (e) {
      return {} as any;
    }
  }
);
