import { createStore } from "@reatom/core";
import { Provider } from "@reatom/react";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../src/main";

const fs = require("fs");

const renderContent = (req, res, next) => {
  fs.readFile(
    path.join(__dirname, "../build/index.html"),
    "utf8",
    (err, data) => {
      try {
        console.log("err", err);

        if (err) {
          console.error(err);
          return res.status(500).send("An error occurred");
        }
        const store = createStore();
        const context = {};

        return res.send(
          data.replace(
            '<div id="root"></div>',
            `<div id="root">${renderToString(
              <Provider value={store}>
                <StaticRouter location={req.url} context={context}>
                  <App />
                </StaticRouter>
              </Provider>
            )}</div>`
          )
        );
      } catch (error) {
        console.log("error", error);
        next();
      }
    }
  );
};

export { renderContent };
