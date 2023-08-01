export interface PokemonCardType {
  name: string;
  types: [];
  set: object;
  rarity: string;
  images: object;
}

export interface pokemonData {
  pokemons: PokemonCardType[];
}

export interface PokemonCardProps {
  pokemonCard: PokemonCardType;
}
