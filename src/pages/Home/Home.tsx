import {
  Container,
  Title,
  SearchSection,
  NewsSection,
  Content,
  Grid,
} from "./Home.styles";

import { HOME_MENU } from "../../constants";
import { SearchInput } from "../../components/SearchInput";
import { Card } from "../../components/Card";

export const Home = () => {
  return (
    <Container>
      <Content>
        <SearchSection>
          <Title>What pokemon are you looking for?</Title>
          <SearchInput />
          <Grid>
            {HOME_MENU.map(({ text, ...menuProps }) => (
              <Card key={text} {...menuProps}>
                {text}
              </Card>
            ))}
          </Grid>
        </SearchSection>
        <NewsSection>Pokemon news</NewsSection>
      </Content>
    </Container>
  );
};
