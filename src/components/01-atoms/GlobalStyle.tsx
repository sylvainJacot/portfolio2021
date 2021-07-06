import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    border: 0;
    outline: none;
}
  
  html {
    position: relative;
    font-size: 16px;
    scroll-behavior: smooth;
    overflow-x: hidden;
    text-rendering: optimizeSpeed;
    margin-top: 0px !important;
  }
  
  
  body {
    position: relative;
    overflow-x: hidden;
    canvas {
      display: block;
    }
  }
  
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none !important;
    cursor: pointer;
    
  }
  
  h1, h2, h3, h4, h5 {
    font-weight: normal;
  }
  
  button {
    cursor: pointer;
  }

  
`;
 
export default GlobalStyle;