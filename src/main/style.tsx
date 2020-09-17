import { styled, createGlobalStyle } from "../libs/styles/index";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }
  a {
    text-decoration: none
  }
  `;

const WrapperCodeStyle = styled.div`
  display: flex;
  height: 100vh;
`;

export { WrapperCodeStyle, GlobalStyle };
