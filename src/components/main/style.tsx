import { styled, createGlobalStyle } from "../../libs/styles/index";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }`;

const WrapperCodeStyle = styled.div`
  display: flex;
  height: 100vh;
`;

export { WrapperCodeStyle, GlobalStyle };
