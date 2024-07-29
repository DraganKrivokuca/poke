import { getPokemons } from "@store/pokemon/thunk";
import { wrapper } from "@store/store";

import PokemonList from "@components/PokemonList/PokemonList";

export default function Home() {
  return <PokemonList />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    await store.dispatch(getPokemons());
    return {
      props: {},
    };
  }
);
