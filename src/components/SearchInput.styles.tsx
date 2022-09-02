import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  padding: 12px;
  background-color: #f5f3f6;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  svg {
    path {
      fill: gray;
    }
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  height: 100%;
  font-size: 20px;
  outline: 0;
  margin-left: 10px;
  width: 100%;
`;
