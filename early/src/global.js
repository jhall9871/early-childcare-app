import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html, body {
    margin: 0;
    padding: 0;
  }

body {
    font-family: serif;
    text-rendering: optimizeLegibility;
    height: 100vh;
    background: ${({ theme }) => theme.lightergray};
    color: ${({ theme }) => theme.darkergray};
}

`