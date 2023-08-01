import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PokemonCardType, pokemonData } from "../../types/pokemon-card";
import PokemonCard from "../Card/PokemonCard";
import { addPageSize } from "../../store/Reducer";

function CardLists() {
  const { pokemons } = useSelector((state: pokemonData) => state.pokemons);
  const { pageSize } = useSelector((state: pokemonData) => state.pageSize);
  const dispatch = useDispatch();

  function loadMore() {
    dispatch(addPageSize(pageSize + 9));
  }

  return (
    <div className="container mt-[40px] mx-auto w-screen mb-[80px]">
      <div className="grid gap-y-[80px] grid-cols-1 justify-items-center md:grid-cols-3 md:gap-x-[73px]">
        {pokemons &&
          pokemons.map((pokemon: PokemonCardType) => (
            <PokemonCard key={pokemon.id} pokemonCard={pokemon} />
          ))}
      </div>
      <div className="flex w-full items-center justify-center h-[160px] text-[16px] text-[#6A6969]">
        <button onClick={loadMore} className="flex flex-row">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <span>show more</span>
        </button>
      </div>
    </div>
  );
}

export default CardLists;
