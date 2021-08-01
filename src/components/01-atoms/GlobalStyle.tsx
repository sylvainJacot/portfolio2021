import { createGlobalStyle } from 'styled-components';

import PoppinsLightItalicWoff from "../assets/fonts/Poppins-LightItalic.woff";
import PoppinsLightItalicWoff2 from "../assets/fonts/Poppins-LightItalic.woff2";
import PoppinsLightWoff from "../assets/fonts/Poppins-Light.woff";
import PoppinsLightWoff2 from "../assets/fonts/Poppins-Light.woff2";
import PoppinsRegularWoff from "../assets/fonts/Poppins-Regular.woff";
import PoppinsRegularWoff2 from "../assets/fonts/Poppins-Regular.woff2";
import PoppinsSemiBoldWoff from "../assets/fonts/Poppins-SemiBold.woff";
import PoppinsSemiBoldWoff2 from "../assets/fonts/Poppins-SemiBold.woff2";
import PoppinsBoldWoff from "../assets/fonts/Poppins-Bold.woff";
import PoppinsBoldWoff2 from "../assets/fonts/Poppins-Bold.woff2";
import PoppinsExtraBoldWoff from "../assets/fonts/Poppins-ExtraBold.woff";
import PoppinsExtraBoldWoff2 from "../assets/fonts/Poppins-ExtraBold.woff2";
import PoppinsBlackWoff from "../assets/fonts/Poppins-Black.woff";
import PoppinsBlackWoff2 from "../assets/fonts/Poppins-Black.woff2";


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

  @font-face {
    font-family: 'Poppins Light, sans-serif';
      src: 
      url('${PoppinsLightWoff}') format('woff'),
      url('${PoppinsLightWoff2}') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
    font-family: 'Poppins Light Italic, sans-serif';
      src: 
      url('${PoppinsLightItalicWoff}') format('woff'),
      url('${PoppinsLightItalicWoff2}') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
    font-family: 'Poppins, sans-serif';
      src: 
      url('${PoppinsRegularWoff}') format('woff'),
      url('${PoppinsRegularWoff2}') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
    font-family: 'Poppins Bold, sans-serif';
      src: 
      url('${PoppinsBoldWoff}') format('woff'),
      url('${PoppinsBoldWoff2}') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
    font-family: 'Poppins SemiBold, sans-serif';
      src: 
      url('${PoppinsSemiBoldWoff}') format('woff'),
      url('${PoppinsSemiBoldWoff2}') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
    font-family: 'Poppins ExtraBold, sans-serif';
      src: 
      url('${PoppinsExtraBoldWoff}') format('woff'),
      url('${PoppinsExtraBoldWoff2}') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
    font-family: 'Poppins Black, sans-serif';
      src: 
      url('${PoppinsBlackWoff}') format('woff'),
      url('${PoppinsBlackWoff2}') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
  }

`;

export const fontsFamilies = {
    poppinsLightitalic : "'Poppins Light Italic, sans-serif'",
    poppinsLight : "'Poppins Light, sans-serif'",
    poppinsRegular : "'Poppins, sans-serif'",
    poppinsSemiBold : "'Poppins SemiBold, sans-serif'",
    poppinsBold : "'Poppins Bold, sans-serif'",
    poppinsExtraBold : "'Poppins ExtraBold, sans-serif'",
    poppinsBlackBold : "'Poppins Black, sans-serif'"
};

 
export default GlobalStyle;