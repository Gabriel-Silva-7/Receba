import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f0f0;
    min-height: 100vh;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
