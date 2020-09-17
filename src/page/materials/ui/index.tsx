import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { routerPage } from "./settings";

export default () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      {routerPage(path).map(({ url, Component }) => (
        <Route key={url} exact path={url} component={Component} />
      ))}
    </Switch>
  );
};
