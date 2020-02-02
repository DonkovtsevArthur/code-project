import React from "react";

import Menu from "../menu";
import Content from "../content";
import ErrorBoundary from "./errorBoundary";

import { WrapperCodeStyle, GlobalStyle } from "./style";

const App: React.FC = () => {
  return (
    <WrapperCodeStyle>
      <ErrorBoundary>
        <GlobalStyle />
        <Menu />
        <Content />
      </ErrorBoundary>
    </WrapperCodeStyle>
  );
};

export default App;
