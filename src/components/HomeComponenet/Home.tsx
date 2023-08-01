import Header from "../HeaderComponent/Header";
import CardLists from "../CardListsComponent/CardLists";
import Search from "../SearchComponent/Search";
import { fetchPokemonCards } from "../../services/PokemonAPI";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../../store/Reducer";
import { PokemonCardType, pokemonData } from "../../types/pokemon-card";

function Home() {
  const { page } = useSelector((state: pokemonData) => state.page);
  const { pageSize } = useSelector((state: pokemonData) => state.pageSize);

  const queryKey = ["pokemonCard", pageSize];

  const dispatch = useDispatch();

  const { data } = useQuery({
    queryKey: queryKey,
    queryFn: () => {
      const fetchData = fetchPokemonCards(pageSize, page);
      fetchData.then((data: PokemonCardType[]) => dispatch(addPokemon(data)));
      return fetchData;
    },
    refetchOnWindowFocus: false,
    staleTime: 30000,
  });

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div>
        <Header />
      </div>
      <div className="flex flex-col overflow-y-scroll w-full min-h-screen bg-[#F8F8F8]">
        <Search></Search>
        {data ? <CardLists></CardLists> : <CardLists></CardLists>}
      </div>
    </div>
  );
}

export default Home;
