import { ReactComponent as PokeBallSVG } from "../assets/svg/pokeball.svg";

import {
  CardContainer,
  CardContent,
  CardProps,
  LeftCornerCircle,
  PokeContainer,
} from "./Card.styles";

export const Card = (props: CardProps) => {
  return (
    <CardContainer
      shadow={props.shadow}
      bgColor={props.bgColor}
      color={props.color}
      to={props.to}
    >
      <LeftCornerCircle />
      <PokeContainer>
        <PokeBallSVG />
      </PokeContainer>
      <CardContent>{props.children}</CardContent>
    </CardContainer>
  );
};
