import React from "react";
import { PokemonCardProps } from "../../types/pokemon-card";

const PokemonCard: React.FC<PokemonCardProps> = function ({ pokemonCard }) {
  return <div>{pokemonCard.name}</div>;
};

export default PokemonCard;
