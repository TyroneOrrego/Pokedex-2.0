import React from "react";
import LazyLoad, { forceCheck, forceVisible } from "react-lazyload";
import { useHistory } from "react-router";
import { IoIosArrowRoundBack, IoIosMenu } from "react-icons/io";
import Skeleton from "react-loading-skeleton";

import { Card } from "../../components/Card";
import { usePokemons } from "../../hooks/usePokemons";
import {
  Container,
  Content,
  Header,
  Image,
  PokemonName,
  PokemonsContainer,
  PokeWrapper,
  SkeletonContainer,
  Title,
} from "./Pokedex.styles";

export const Pokedex = () => {
  const [page, setPage] = React.useState(0);
  const { pokemons, loading } = usePokemons(page);
  const observer = React.useRef<any>();
  const history = useHistory();

  const goBack = () => {
    void history.push("/");
  };

  const lastPokemonRef = React.useCallback(
    (pokemon) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((pokemons) => {
        const [observedPokemon] = pokemons;
        if (observedPokemon.isIntersecting) {
          setPage((currentPage) => currentPage + 1);
          forceCheck();
          forceVisible();
        }
      });

      if (pokemon) observer.current.observe(pokemon);
    },
    [loading]
  );

  return (
    <Container>
      <Content>
        <div>
          <Header>
            <IoIosArrowRoundBack className="go-back" onClick={goBack} />
            <IoIosMenu className="menu" />
          </Header>
          <Title>Pokedex</Title>
        </div>
        <PokemonsContainer>
          {pokemons.map((pokemon: any, currentPokemonIndex: number) => (
            <Card
              key={pokemon.name}
              shadow={`rgb(${pokemon.colors[1]})`}
              color={`rgb(${pokemon.colors[2]})`}
              to={`/pokemon/${pokemon.name}`}
            >
              <PokeWrapper
                ref={
                  pokemons.length - 10 === currentPokemonIndex
                    ? lastPokemonRef
                    : null
                }
              >
                <PokemonName>{pokemon.name}</PokemonName>
                <LazyLoad>
                  <Image
                    loading="lazy"
                    alt={pokemon.name}
                    src={pokemon.imageURL}
                  />
                </LazyLoad>
              </PokeWrapper>
            </Card>
          ))}
          <SkeletonContainer>
            {loading && <Skeleton count={10} style={{ height: 100 }} />}
          </SkeletonContainer>
        </PokemonsContainer>
      </Content>
    </Container>
  );
};
