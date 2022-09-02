import styled from "styled-components";

export enum Direction {
  horizontal = "horizontal",
  vertical = "vertical",
}
interface Colorable {
  $color?: string;
  $shadow?: string;
}

interface GridProps {
  direction?: Direction;
}

export const Container = styled.div`
  align-items: center;
  color: #626262;
  background-color: #f6f7fc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
`;

export const Content = styled.div`
  border-radius: 8px;
  width: 100%;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

export const PokemonName = styled.h1`
  padding-top: 0;
  font-size: 40px;
  text-transform: capitalize;
`;

export const ImageSection = styled.section<Colorable>`
  background-color: ${({ $color }) => ($color ? `rgb(${$color})` : "white")};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: ${({ $color }) => ($color === "255,255,255" ? "#616161" : "white")};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 52vh;
  min-height: 500px;
  padding: 50px 32px;
  padding-bottom: 80px;
  z-index: 1;

  > svg {
    transform: scale(9);
    margin: 0 auto;
    path {
      fill: ${({ $shadow }) => `rgba(${$shadow} / 70%)`};
    }
  }
`;

export const InfoSection = styled.section`
  align-items: center;
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  height: 51vh;
  min-height: 500px;
  margin-top: -50px;
  padding: 16px 32px;
  padding-top: 40px;
  position: relative;
`;

export const Image = styled.img`
  margin-top: -280px;
  width: 300px;
  z-index: 2;
`;

export const Header = styled.div`
  padding-bottom: 150px;

  > div:first-child {
    padding: 30px 0;
  }
  > div:nth-child(2) {
    padding: 8px 0;
  }
  .go-back {
    transform: scale(3);
  }
  .like {
    transform: scale(2);
  }
  svg {
    path {
      fill: white;
    }
  }
`;

export const Grid = styled.div<GridProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === Direction.horizontal ? "column" : "row"};
  justify-content: space-between;
`;

export const Chip = styled.span<Colorable>`
  background-color: ${({ $shadow }) => `rgba(${$shadow} / 100%)`};
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 16px 6px;
  text-transform: capitalize;

  & + & {
    margin-left: 8px;
  }
`;

export const PokemonNumber = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
`;

export const Paragraph = styled.p`
  line-height: 1.5;
  text-align: left;
  text-transform: lowercase;

  :first-letter {
    text-transform: capitalize;
  }
`;

export const Box = styled.div`
  border: 1px solid lightgray;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  padding: 24px 0;

  .box-title {
    color: #c2c0c5;
    padding-bottom: 8px;
  }
`;

export const EvolutionTitle = styled.span`
  font-weight: bold;
  display: inline-block;
  margin-bottom: 32px;
  text-align: left;
  width: 100%;
`;
