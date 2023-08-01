import React from "react";
import Dropdown from "../../assets/images/Dropdown.svg";

function Search() {
  return (
    <div className="flex mt-[45px] justify-center items-center">
      <div className="grid grid-cols-1 w-[383px] rounded-[100px] md:grid-cols-2 md:divide-x md:divide-[#DFDFDF] md:shadow-md">
        <div className="h-[35px]">
          <input
            placeholder="Name.."
            className="text-center w-full h-full rounded-[100px] shadow-md md:text-left md:rounded-r-none md:shadow-none"
          ></input>
        </div>
        <div className="grid grid-cols-3 mt-[16px] gap-[16px] md:mt-[0] md:gap-[0] md:divide-x md:divide-[#DFDFDF]">
          <div>
            <input
              placeholder="Type"
              className="text-center w-full h-full rounded-[100px] shadow-md md:rounded-none md:text-left md:shadow-none"
            ></input>
          </div>
          <div>
            <input
              placeholder="Rarity"
              className="text-center w-full h-full rounded-[100px] shadow-md md:rounded-none md:text-left md:shadow-none"
            ></input>
          </div>
          <div>
            <input
              placeholder="Set"
              className="text-center w-full h-full rounded-[100px] shadow-2xl shadow-md md:text-left md:rounded-l-none md:shadow-none"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
