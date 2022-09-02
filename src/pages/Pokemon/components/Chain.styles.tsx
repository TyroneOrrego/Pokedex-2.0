import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-transform: capitalize;

  svg {
    transform: scale(2);

    path {
      fill: darkgrey;
    }
  }

  & + & {
    padding-top: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 80px;
    padding-bottom: 10px;
  }
`;

export const Level = styled.span`
  font-weight: bold;
  font-size: 12px;
`;
