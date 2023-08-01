import React from "react";
import { useSelector } from "react-redux";
import { PokemonCardType, pokemonData } from "../../types/pokemon-card";
import PokemonCard from "../Card/PokemonCard";

function CardLists() {
  const { pokemons } = useSelector((state: pokemonData) => state.pokemons);
  return (
    <div className="">
      {pokemons &&
        pokemons.map((pokemon: PokemonCardType) => (
          <div key={pokemon.name}>
            <PokemonCard pokemonCard={pokemon} />
          </div>
        ))}
    </div>
  );
}

export default CardLists;
