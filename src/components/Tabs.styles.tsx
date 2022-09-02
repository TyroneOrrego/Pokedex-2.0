import styled, { css } from "styled-components";

interface HeaderElement {
  totalTabs: number;
  active?: boolean;
}

interface IndicatorProps extends HeaderElement {
  indexActive: number;
}

export const TabsContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 250px;
  /* padding: 20px 30px; */
  overflow: hidden;
  border-radius: 50px;
`;

export const TabsHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TabHeaderItem = styled.button<HeaderElement>`
  background-color: #fff;
  border: none;
  color: #c2c0c5;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  height: 100%;
  outline: none;
  text-align: center;
  text-transform: capitalize;
  width: calc(100% / ${({ totalTabs }) => totalTabs});

  ${({ active }) =>
    active &&
    css`
      color: #5c5c5c;
    `}
`;

export const Indicator = styled.div<IndicatorProps>`
  position: relative;
  width: calc(100% / ${({ totalTabs }) => totalTabs});
  height: 5px;
  background: #7978ba;
  left: calc(
    calc(100% / ${({ totalTabs }) => totalTabs}) *
      ${({ indexActive }) => indexActive}
  );
  border-radius: 5px;
  transition: all 500ms ease-in-out;
`;
export const TabsBody = styled.div`
  position: relative;
  height: calc(100% - 60px);
  padding: 10px 5px;
`;

export const TabItem = styled.div`
  padding: 32px 0;
`;
