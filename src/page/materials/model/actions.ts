import { declareAction } from "@reatom/core";

import { Materials, TypeActions } from "./types";
import { $axios } from "../../../models/axios";

const success = declareAction<Materials[], TypeActions.success>([
  TypeActions.success
]);
const request = declareAction<TypeActions.request>([TypeActions.request]);
const error = declareAction<any, TypeActions.error>([TypeActions.error]);
const materialFetch = declareAction(
  ["fetchActionMaterials"],
  (_, { dispatch }) => {
    dispatch(request());
    $axios({})
      .then((res: Materials[]) => {
        return dispatch(success(res));
      })
      .catch(error => {
        console.error("materials error", error);
        return dispatch(error(error));
      });
  }
);

export { success, request, error, materialFetch };
