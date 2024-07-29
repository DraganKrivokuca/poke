import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import isEqual from "react-fast-compare";

import { getPokemonDetails, getPokemons } from "./thunk";

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
    loading: false,
    selectedPokemon: {},
    pokemonDetails: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      if (!isEqual(state, action.payload[pokemonSlice.name])) {
        Object.assign(state, action.payload[pokemonSlice.name]);
      }
    });

    builder.addCase(getPokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemons = action.payload.results;
    });

    builder.addCase(getPokemonDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPokemonDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemonDetails = action.payload;
    });
  },
});

export default pokemonSlice;
