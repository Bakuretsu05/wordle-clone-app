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
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const defaultTheme = {
  bgColor: "#121213",
  textColor: {
    primary: "#FFFFFF",
  },
  color: {
    primary: "#3A3A3C",
    lighterPrimary: "#1A1A1B",
    secondary: "#3A3A3C",
  },
  wordle: {
    color: {
      yellow: "#B59F3A",
      green: "#538D4E",
      gray: "#3A3A3C",
    },
  },
};
