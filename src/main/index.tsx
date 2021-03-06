import React, { useEffect } from "react";
import { context } from "@reatom/react";
import { connectReduxDevtools } from "@reatom/debug";
// styles
import { WrapperCodeStyle, GlobalStyle } from "./style";
// components
import Menu from "../components/menu";
import Content from "../page";
import ErrorBoundary from "./errorBoundary";
import { store } from "../models/store";

const App: React.FC = () => {
  useEffect(() => connectReduxDevtools(store), []);
  return (
    <context.Provider value={store}>
      <WrapperCodeStyle>
        <ErrorBoundary>
          <GlobalStyle />
          <Menu />
          <Content />
        </ErrorBoundary>
      </WrapperCodeStyle>
    </context.Provider>
  );
};

export default App;
