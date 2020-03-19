import React, { useEffect } from "react";
import { createStore } from "@reatom/core";
import { context } from "@reatom/react";
import { connectReduxDevtools } from "@reatom/debug";
// styles
import { WrapperCodeStyle, GlobalStyle } from "./style";
// components
import Menu from "../menu";
import Content from "../content";
import ErrorBoundary from "./errorBoundary";

const App: React.FC = () => {
  const store = createStore();
  useEffect(() => connectReduxDevtools(store), []);
  return (
    <WrapperCodeStyle>
      <ErrorBoundary>
        <GlobalStyle />
        <context.Provider value={store}>
          <Menu />
          <Content />
        </context.Provider>
      </ErrorBoundary>
    </WrapperCodeStyle>
  );
};

export default App;
