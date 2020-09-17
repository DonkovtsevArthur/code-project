import { declareAction } from "@reatom/core";

import { Materials } from ".";
import { $axios } from "../../../models/axios";

export const materialsSuccess = declareAction<Materials[], "materialsSuccess">([
  "materialsSuccess"
]);

export const materialsFetch = declareAction<"materialsFetch">([
  "materialsFetch"
]);

export const materialsError = declareAction<any, "materialsError">([
  "materialsError"
]);

export const materialFetch = declareAction(
  ["fetchActionMaterials"],
  (payload, { dispatch, ...rest }) => {
    dispatch(materialsFetch());
    $axios({})
      .then((res: Materials[]) => {
        return dispatch(materialsSuccess(res));
      })
      .catch(error => {
        console.error("materials error", error);
        return dispatch(materialsError(error));
      });
  }
);
