import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "redux-zero/react";

import { store } from "./store";

import * as serviceWorker from "./serviceWorker";
import ThemeProviderComponent from "./libs/themeSancho/ThemeProviderComponent/";
import App from "./components/main";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProviderComponent>
      <Router>
        <App />
      </Router>
    </ThemeProviderComponent>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
