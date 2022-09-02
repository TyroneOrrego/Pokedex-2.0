import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PokemonChain } from "../../../hooks/usePokemonChain";

import { Container, Level } from "./Chain.styles";

export const Chain: React.FC<PokemonChain> = ({
  name,
  imageURL,
  nextPokemon,
}) => {
  return (
    <Container>
      <div>
        <img src={imageURL} alt={name} />
        <span>{name}</span>
      </div>
      <div>
        <FaLongArrowAltRight />
        <Level>
          {nextPokemon.minLevel ? `Lvl ${nextPokemon.minLevel}` : "Needs item"}
        </Level>
      </div>
      <div>
        <img src={nextPokemon.imageURL} alt={nextPokemon.name} />
        <span>{nextPokemon.name}</span>
      </div>
    </Container>
  );
};
