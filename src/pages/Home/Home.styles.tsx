import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
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
  display: grid;
  grid-gap: 20px;
  height: 100vh;
  width: 100%;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

export const Title = styled.h1`
  padding-top: 0;
  font-size: 30px;

  @media (min-width: 500px) {
    padding-top: 200px;
  }
`;

export const SearchSection = styled.section`
  background-color: white;
  border-radius: 12px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: grid;
  grid-gap: 40px;
  margin-bottom: -20px;
  padding: 32px;
  position: relative;
  padding-bottom: 20px;
`;

export const NewsSection = styled.section`
  background-color: #f2f1f6;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  height: 100%;
  min-height: 300px;
  padding: 32px;
  padding-top: 40px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
