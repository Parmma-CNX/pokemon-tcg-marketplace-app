import { createSlice } from "@reduxjs/toolkit";
import { pokemonData } from "../types/pokemon-card";

const initialState: pokemonData = {
  pokemons: [],
  page: 1,
  pageSize: 9,
};

const pokemonSlice = createSlice({
  name: "pokemonListing",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.pokemons = action.payload;
    },
    addPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
  },
});

export const { addPokemon, addPageSize } = pokemonSlice.actions;
export default pokemonSlice.reducer;
