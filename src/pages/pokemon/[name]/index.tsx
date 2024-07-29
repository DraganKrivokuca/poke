import { wrapper } from "@store/store";
import { selectPokemoDetailed } from "@store/pokemon/selector";
import { useAppSelector } from "src/hooks/redux/useAppSelector";

import PokemonItem from "@components/PokemonItem/PokemonItem";
import { getPokemonDetails } from "@store/pokemon/thunk";

const PokemonPage = () => {
  const pokemonDetails = useAppSelector(selectPokemoDetailed);

  return (
    <PokemonItem
      name={pokemonDetails?.name}
      img={pokemonDetails?.sprites?.front_default}
      abilities={pokemonDetails?.abilities}
    />
  );
};

export default PokemonPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }: any) => {
      const { name } = query;
      await store.dispatch(getPokemonDetails(name));
      return {
        props: {},
      };
    }
);
