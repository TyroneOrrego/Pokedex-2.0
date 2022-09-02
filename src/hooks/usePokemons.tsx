import React from "react";
import { prominent } from "color.js";

import { GetPokemons } from "../types/pokemonsRequest";
import { pokeApi } from "../api";

export const usePokemons = (page: number = 0) => {
  const [pokemons, setPokemons] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(true);
    pokeApi
      .get<GetPokemons>(`/pokemon/?offset=${String(page * 10)}&limit=10`)
      .then(async ({ data }) => {
        const pokemonsFormatted = data.results.map((pokemon) => ({
          ...pokemon,
          imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            pokemon.url.split("/")[pokemon.url.split("/").length - 2]
          }.png`,
        }));

        const dominantColorsPromises = pokemonsFormatted.map(({ imageURL }) =>
          prominent(imageURL)
        );
        const dominantColorsResolved = await Promise.all(
          dominantColorsPromises
        );
        const pokeColors = dominantColorsResolved.map((colorsArray: any) =>
          colorsArray.map((color: Number[]) => color.join(","))
        );

        setPokemons((prevPokemons: any) => [
          ...prevPokemons,
          ...pokemonsFormatted.map((pokemon, index) => ({
            ...pokemon,
            colors: pokeColors[index],
          })),
        ]);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error ", error);
        setLoading(false);
      });
  }, [page]);

  return { pokemons, loading };
};
