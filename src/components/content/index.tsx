import React from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { Spinner } from "sancho";

// style
import { WrapperContentStyle } from "./style";
import { routers } from "./settings";

interface IAsyncPage {
  page: string;
}

const AsyncPage = loadable(({ page }: IAsyncPage) => import(`./${page}`), {
  fallback: <Spinner className="spinner" />
});

const Content: React.FC = () => {
  return (
    <WrapperContentStyle>
      <Switch>
        {routers.map(({ path, page }) => (
          <Route
            key={page}
            path={path}
            render={() => <AsyncPage page={page} />}
          />
        ))}
      </Switch>
    </WrapperContentStyle>
  );
};

export default Content;