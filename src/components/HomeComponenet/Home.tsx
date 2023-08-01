import { useState } from "react";
import Header from "../HeaderComponent/Header";
import { fetchPokemonCards } from "../../services/PokemonAPI";
import { addPokemon } from "../../store/Reducer";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import CardLists from "../CardListsComponent/CardLists";
import Search from "../SearchComponent/Search";

function Home() {
  const [pageSize, setPageSize] = useState<number>(9);
  const [page, setPage] = useState<number>(1);
  const queryKey = ["pokemonCards"];

  const dispatch = useDispatch();

  const { isLoading, error, data } = useQuery({
    queryKey: queryKey,
    queryFn: () => fetchPokemonCards(pageSize, page),
    refetchOnWindowFocus: false,
    staleTime: 30000,
  });

  if (data) {
    dispatch(addPokemon(data));
  }

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";

  return (
    <div className="flex flex-col h-screen">
      <div>
        <Header />
      </div>
      <div className="flex overflow-hidden">
        <div className="flex flex-col overflow-y-auto w-full min-h-screen bg-[#F8F8F8]">
          <Search></Search>
          <CardLists></CardLists>
        </div>
      </div>
      {/* <div>
        <Header />
      </div>
      <div>
        <CardLists />
      </div> */}
    </div>
  );
}

export default Home;
