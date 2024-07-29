import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "src/hooks/redux/useAppSelector";
import { selectPokemons } from "@store/pokemon/selector";

import style from "./PokemonList.module.scss";

const PokemonList = () => {
  const router = useRouter();
  const pokemons = useAppSelector(selectPokemons);

  const openDetailedPoke = (poke: string) => {
    router.push(`/pokemon/${poke}`);
  };

  return (
    <div className={style.pokemonWrapper}>
      <h1>Pokemons</h1>
      <div className={style.pokemons}>
        {pokemons.map((pokemon: any) => (
          <button
            key={pokemon.name}
            onClick={() => openDetailedPoke(pokemon.name)}>
            {pokemon.name}
          </button>
        ))}
      </div>
    </div>
  );
};
export default PokemonList;
