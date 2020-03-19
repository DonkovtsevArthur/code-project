import { declareAction } from "@reatom/core";
import { $axios } from "../../../../models/axios";
import { IMaterials } from ".";

export const materialsSuccess = declareAction<[IMaterials], "materialsSuccess">(
  ["materialsSuccess"]
);

export const materialFetch = declareAction(
  ["fetchActionMaterials"],
  (payload, { dispatch, ...rest }) => {
    console.log("payload", payload, rest);
    $axios({ url: "materials" }).then((res: [IMaterials]) => {
      return dispatch(materialsSuccess(res));
    });
  }
);
