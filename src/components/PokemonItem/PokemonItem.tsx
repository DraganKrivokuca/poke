import React, { Suspense, useEffect } from "react";
import Image from "next/image";
import { useAppDispatch } from "src/hooks/redux/useAppDispatch";
import { useAppSelector } from "src/hooks/redux/useAppSelector";

import { getPokemonAbilitiesLog } from "@store/pokemon/thunk";
import { selectPokemnAbilitiesLog } from "@store/pokemon/selector";

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
  const dispatch = useAppDispatch();
  const abilitiesLog = useAppSelector(selectPokemnAbilitiesLog);
  const onHandleClick = (url: string) => {
    dispatch(getPokemonAbilitiesLog(url));
  };

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
            <li>
              <button
                className={style.abilitiesButton}
                onClick={() => onHandleClick(ability.ability.url)}>
                {ability.ability.name}
              </button>
            </li>
          </ul>
        ))}
      </div>
      <Suspense fallback={<div>lodaing ...</div>}>
        <div className={style.abilitiesLog}>
          {abilitiesLog?.effect_entries?.map(
            (abilityEffect: Record<any, any>) => {
              return (
                <div key={abilityEffect.id}>
                  <span className={style.language}>
                    {abilityEffect.language.name.toUpperCase()}:{" "}
                  </span>
                  <span>{abilityEffect.effect}</span>
                </div>
              );
            }
          )}
        </div>
      </Suspense>
    </div>
  );
};
export default PokemonItem;
