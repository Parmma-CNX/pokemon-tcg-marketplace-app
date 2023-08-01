export interface PokemonCardType {
  id: string;
  name: string;
  types: [];
  set: object;
  rarity: string;
  images: object;
  prices: object;
}

export interface pokemonData {
  pokemons: PokemonCardType[];
  page: number;
  pageSize: number;
}

export interface PokemonCardProps {
  pokemonCard: PokemonCardType;
}
