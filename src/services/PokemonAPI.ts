import axios from "axios";
import { API_BASE_URL } from "./PokemonAPIConfig";
import { API_KEY } from "./PokemonAPIConfig";
import { PokemonCardType } from "../types/pokemon-card";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "X-Api-Key": API_KEY,
  },
});

export async function fetchPokemonCards(
  pageSize: number,
  page: number
): Promise<PokemonCardType[]> {
  try {
    const response = await axiosInstance.get("/cards", {
      params: {
        pageSize,
        page,
      },
    });

    console.log("response", response);

    const resData = response.data.data.map((card: PokemonCardType) => ({
      id: card.id,
      name: card.name,
      types: card.types,
      set: card.set,
      rarity: card.rarity,
      images: card.images,
      prices: card.cardmarket.prices,
    }));

    return resData;
  } catch (error) {
    throw new Error("Failed to fetch Pokémon cards.");
  }
}
