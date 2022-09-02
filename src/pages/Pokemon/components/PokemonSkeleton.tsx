import Skeleton from "react-loading-skeleton";
import {
  ImageSection,
  Header,
  Grid,
  InfoSection,
} from "./PokemonSkeleton.styles";

export const PokemonSkeleton = () => {
  return (
    <>
      <ImageSection>
        <Header>
          <Grid>
            <Skeleton count={2} height={40} width={100} />
          </Grid>
          <Grid>
            <Grid justify="flex-start">
              <Skeleton
                count={2}
                height={20}
                width={50}
                style={{ marginRight: 10 }}
              />
            </Grid>
            <Grid justify="flex-end">
              <Skeleton count={1} height={20} width={100} />
            </Grid>
          </Grid>
        </Header>
      </ImageSection>
      <InfoSection>
        <Skeleton
          className="skeleton-image"
          count={1}
          height={300}
          width={300}
          style={{ borderRadius: "50%", marginTop: -100 }}
        />
        <Grid justify="space-around" style={{ margin: "50px 0" }}>
          <Skeleton count={2} height={20} width={100} />
        </Grid>
        <Grid direction="column">
          <Skeleton count={4} height={20} style={{ marginTop: 10 }} />
        </Grid>
        <Grid>
          <Skeleton count={1} height={100} style={{ marginTop: 40 }} />
        </Grid>
      </InfoSection>
    </>
  );
};
