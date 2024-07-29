import React from "react";
import Image from "next/image";

import style from "./PokemonItem.module.scss";

type PokemonAbilities = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

type PokemonItemProps = {
  name: string;
  img: string;
  abilities?: PokemonAbilities[];
};

const PokemonItem = ({ name, img, abilities }: PokemonItemProps) => {
  return (
    <div className={style.pokemonWrapper}>
      <div className={style.pockemonPic}>
        <Image src={img} alt="pokemon" width={100} height={100} />
      </div>
      <span className={style.name}>{name}</span>
      <div className={style.abilities}>
        <span className={style.abilitiesName}>Abilities:</span>
        {abilities?.map((ability) => (
          <ul key={ability.slot} className={style.abilitiesList}>
            <li>{ability.ability.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default PokemonItem;
