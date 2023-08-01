import React from "react";
import { PokemonCardProps } from "../../types/pokemon-card";

const PokemonCard: React.FC<PokemonCardProps> = function ({ pokemonCard }) {
  return (
    <div className="relative w-[294px] h-[431px]">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[194.367px] h-[271.133px] z-10">
        <img
          src={pokemonCard.images.large}
          alt={pokemonCard.name}
          className="w-full h-full"
        ></img>
      </div>
      <div className="absolute top-[204px] bottom-[23.37px] w-[294px] h-[204px] bg-[#FFF] rounded-[20px] z-0">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex h-[38px] text-[25px] mt-[44px] font-bold items-center justify-center">
            {pokemonCard.name}
          </div>
          <div className="flex text-[#0F6DB0] text-[16px] h-[24px] font-normal items-center justify-center">
            {pokemonCard.rarity ? pokemonCard.rarity : "Undefined"}
          </div>
          <div className="grid grid-cols-2 gap-[29.3px] items-center justify-center h-[30px] text-[20px] text-[#6A6969]">
            <div>${pokemonCard.prices.averageSellPrice}</div>
            <div>{pokemonCard.set.total}left</div>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 bottom-[0] transform -translate-x-1/2 h-[47.367px] w-[217.233px]">
        <button className="w-full h-full text-[20px] font-medium bg-[#FDCE29] rounded-full">
          Select card
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;
