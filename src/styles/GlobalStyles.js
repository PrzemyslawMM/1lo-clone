import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    font-family: Tahoma,Arial,sans-serif;
    margin: 0;
    color: black;
  }
`;

export default GlobalStyle;
