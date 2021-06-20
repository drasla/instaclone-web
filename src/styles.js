import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
    accent: "#0095f6",
    borderColor: "#dbdbdb",
    fontColor: "#2c2c2c",
    bgColor: "#ffffff",
};

export const darkTheme = {
    fontColor: "#ffffff",
    bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    background-color: #fafafa;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    color: #555555;
  }
  
  a {
    text-decoration: none;
  }
`;