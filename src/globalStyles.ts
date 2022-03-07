import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Roboto Condensed', sans-serif;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgColor};
  display: grid;
  grid-template-rows: 1fr min-content;
  justify-items: center;
  align-items: center;
`;

export const Screen = styled.div`
  width: 100%;
`;

export const defaultTheme = {
  bgColor: "#121213",
  textColor: {
    primary: "#FFFFFF",
  },
  color: {
    primary: "#3A3A3C",
    lighterPrimary: "#1A1A1B",
    secondary: "#818384",
  },
  wordle: {
    color: {
      yellow: "#B59F3A",
      green: "#538D4E",
      gray: "#3A3A3C",
    },
  },
};
