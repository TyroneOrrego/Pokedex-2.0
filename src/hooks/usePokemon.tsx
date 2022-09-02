import React from "react";
import { prominent } from "color.js";

import { pokeApi } from "../api";
import { Pokemon } from "../types/pokemon";

export const usePokemon = (name: string) => {
  const [pokemon, setPokemon] = React.useState<Pokemon>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    pokeApi
      .get<Pokemon>(`/pokemon/${name}`)
      .then(async ({ data }) => {
        const formattedPokemon = {
          ...data,
          main_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        };
        const response: any = await prominent(formattedPokemon.main_image);
        const colors = response.map((color: number[]) => color.join(","));

        const detailPromises = [
          // pokeApi.get(`/characteristic/${data.id}`),
          pokeApi.get(`/pokemon-species/${data.id}`),
        ];

        const [{ data: specie }] = await Promise.all(detailPromises);

        setPokemon({ ...formattedPokemon, colors, specie });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, [name]);

  return { pokemon, loading };
};
