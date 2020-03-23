import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { routerPage } from "./settings";

export default () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      {routerPage(path).map(({ url, component }, i) => (
        <Route key={i} exact path={url} component={component} />
      ))}
    </Switch>
  );
};
