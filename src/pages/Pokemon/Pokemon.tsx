import React from "react";
import { IoIosArrowRoundBack, IoIosHeartEmpty } from "react-icons/io";
import { useParams, useHistory } from "react-router-dom";

import { ReactComponent as PokeballSVG } from "../../assets/svg/pokeball.svg";
import { Tabs } from "../../components/Tabs";
import { Chain } from "./components/Chain";
import { PokemonSkeleton } from "./components/PokemonSkeleton";
import { usePokemon } from "../../hooks/usePokemon";
import { usePokemonChain } from "../../hooks/usePokemonChain";
import {
  AboutContainer,
  Box,
  Chip,
  Container,
  Content,
  Direction,
  Header,
  Grid,
  Image,
  ImageSection,
  InfoSection,
  PokemonName,
  PokemonNumber,
  Paragraph,
  EvolutionTitle,
} from "./Pokemon.styles";

export const Pokemon = () => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const { name } = useParams<{ name: string }>();
  const history = useHistory();

  const { pokemon, loading } = usePokemon(name);
  const { pokemonChain } = usePokemonChain(
    pokemon?.specie?.evolution_chain.url
  );

  const { flavor_text: aboutText } =
    pokemon?.specie?.flavor_text_entries[6] || {};

  const goBack = React.useCallback(() => {
    void history.push("/pokedex");
  }, [history]);
  return (
    <Container>
      <Content>
        {loading && !imageLoaded ? (
          <PokemonSkeleton />
        ) : (
          <>
            <ImageSection
              $shadow={String(pokemon?.colors[1]).replaceAll(",", " ")}
              $color={String(pokemon?.colors[2])}
            >
              <Header>
                <Grid>
                  <IoIosArrowRoundBack className="go-back" onClick={goBack} />
                  <IoIosHeartEmpty className="like" onClick={goBack} />
                </Grid>
                <Grid>
                  <PokemonName>{pokemon?.name}</PokemonName>
                  <PokemonNumber>#{pokemon?.id}</PokemonNumber>
                </Grid>
                <Grid>
                  <Grid>
                    {pokemon?.types.map(({ type: { name } }) => (
                      <Chip
                        $shadow={String(pokemon?.colors[1]).replaceAll(
                          ",",
                          " "
                        )}
                        key={name}
                      >
                        {name}
                      </Chip>
                    ))}
                  </Grid>
                  <Grid>
                    <span>{pokemon?.specie?.genera[7].genus}</span>
                  </Grid>
                </Grid>
              </Header>
              <PokeballSVG />
            </ImageSection>
            <InfoSection>
              <Image
                height="300"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                src={pokemon?.main_image}
                alt={pokemon?.name}
              />
              <Tabs initial="About">
                <Tabs.Tab label="About">
                  <AboutContainer>
                    <Paragraph>{aboutText}</Paragraph>
                    <Box>
                      <Grid direction={Direction.horizontal}>
                        <span className="box-title">Height</span>
                        <span>
                          {pokemon?.height}dm{" "}
                          {`(${Number(pokemon?.height) * 10} cm)`}
                        </span>
                      </Grid>
                      <Grid direction={Direction.horizontal}>
                        <span className="box-title">Weight</span>
                        <span>
                          {pokemon?.weight}hg{" "}
                          {`(${Number(pokemon?.weight) / 10} kg)`}
                        </span>
                      </Grid>
                    </Box>
                  </AboutContainer>
                </Tabs.Tab>

                <Tabs.Tab label="Evolution">
                  <EvolutionTitle>Evolution chain</EvolutionTitle>
                  {pokemonChain?.map((chain) => (
                    <Chain key={chain.name} {...chain} />
                  ))}
                </Tabs.Tab>
              </Tabs>
            </InfoSection>
          </>
        )}
      </Content>
    </Container>
  );
};
