import { declareAction } from "@reatom/core";
import { $axios } from "../../../../models/axios";
import { IMaterials } from ".";

export const materialsSuccess = declareAction<IMaterials, "materialsSuccess">([
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
      .then((res: IMaterials) => {
        return dispatch(materialsSuccess(res));
      })
      .catch(error => {
        console.error("materials error", error);
        return dispatch(materialsError(error));
      });
  }
);
