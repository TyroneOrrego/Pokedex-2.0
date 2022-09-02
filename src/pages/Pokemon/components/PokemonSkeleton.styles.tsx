import styled from "styled-components";

interface GridProps {
  direction?: string;
  justify?: string;
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

export const ImageSection = styled.section`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 52vh;
  min-height: 500px;
  padding: 50px 32px;
  padding-top: 110px;
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
  position: relative;

  > span {
    margin-top: -240px;
  }
`;

export const Header = styled.div`
  > div:first-child {
    padding: 8px 0;
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
  &,
  div,
  > span {
    display: flex;
    flex-direction: ${({ direction }) => (direction ? direction : "row")};
    justify-content: ${({ justify }) => (justify ? justify : "space-between")};
    width: 100%;
  }
`;
