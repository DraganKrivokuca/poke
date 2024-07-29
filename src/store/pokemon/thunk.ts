import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonAPI } from "./api";

export const getPokemons = createAsyncThunk(
  "pokemons/getPokemons",
  async () => {
    try {
      const response = await pokemonAPI.getPokemons();
      return response;
    } catch (e) {
      console.error("from thunk", e);
    }
  }
);

export const getPokemonDetails = createAsyncThunk(
  "pokemons/getPokemonDetails",
  async (payload: string) => {
    try {
      const response = await pokemonAPI.getPokemonDetails(payload);
      return response;
    } catch (e) {
      console.error("from thunk", e);
    }
  }
);

export const getPokemonAbilitiesLog = createAsyncThunk(
  "pokemons/getPokemonAbilitiesLog",
  async (payload: string) => {
    try {
      const response = await pokemonAPI.getPokemonAbilitiesLog(payload);
      return response;
    } catch (e) {
      console.error("from thunk", e);
    }
  }
);
