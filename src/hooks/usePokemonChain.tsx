import React from "react";

import { pokeApi } from "../api";
import { Chain, PokemonChainRequest } from "../types/pokemonChainRequest";

export interface PokemonChain {
  imageURL: string;
  name: string;
  nextPokemon?: any;
  minLevel: number;
}

export const usePokemonChain = (url?: string) => {
  const [chain, setChain] = React.useState<PokemonChain[]>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (url) {
      pokeApi
        .get<PokemonChainRequest>(
          `/evolution-chain/${url?.split("/")[url?.split("/").length - 2]}`
        )
        .then(async ({ data }) => {
          const {
            chain: {
              evolves_to,
              species: { name, url },
            },
          } = data;
          const pokemonChainArray = [
            {
              name,
              imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                url.split("/")[url.split("/").length - 2]
              }.png`,
              minLevel: 0,
            },
          ];

          getEvolutionChain(evolves_to, pokemonChainArray);

          setChain(pokemonChainArray);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
          setLoading(false);
        });
    }
  }, [url]);

  return { pokemonChain: chain, loading };
};

function getEvolutionChain(
  nextChain: Chain[],
  pokemonChainArray: PokemonChain[]
) {
  const [
    {
      species: { name, url },
      evolution_details,
      evolves_to,
    },
  ] = nextChain;

  const nextPokemonInfo = {
    name,
    imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      url.split("/")[url.split("/").length - 2]
    }.png`,
    minLevel: evolution_details[0].min_level,
  };

  if (!pokemonChainArray[pokemonChainArray.length - 1].nextPokemon) {
    pokemonChainArray[pokemonChainArray.length - 1].nextPokemon =
      nextPokemonInfo;
    if (evolves_to.length > 0) {
      pokemonChainArray.push(nextPokemonInfo);
    }
  }

  if (evolves_to.length > 0) getEvolutionChain(evolves_to, pokemonChainArray);
  else {
    return;
  }
}
