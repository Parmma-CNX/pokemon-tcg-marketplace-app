import { createSlice, current } from "@reduxjs/toolkit";
import { pokemonData } from "../types/pokemon-card";

const initialState: pokemonData = {
  pokemons: [],
};

const pokemonSlice = createSlice({
  name: "pokemonListing",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.pokemons = action.payload;
      console.log("current state --->", current(state));
    },
  },
});

export const { addPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
