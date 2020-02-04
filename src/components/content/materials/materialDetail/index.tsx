import React from "react";

import loadable from "@loadable/component";
import { Spinner } from "sancho";

export const MaterialDetailPage = loadable(() => import("./materialDetail"), {
  fallback: <Spinner />
});
