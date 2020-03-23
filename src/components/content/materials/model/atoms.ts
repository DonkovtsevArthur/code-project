import { declareAtom } from "@reatom/core";
import { materialsSuccess, materialsFetch, materialsError } from "./actions";
import { IState, IMaterials } from ".";

const initialState: IState = {
  data: [],
  error: "",
  isLoading: false
};

export const materialsAtom = declareAtom(["materials"], initialState, on => [
  on(
    materialsFetch,
    (state: IState): IState => {
      return {
        ...state,
        error: "",
        isLoading: true
      };
    }
  ),
  on(
    materialsSuccess,
    (state: IState, payload: IMaterials): IState => {
      return {
        ...state,
        data: payload.materials,
        isLoading: false
      };
    }
  ),
  on(
    materialsError,
    (state: IState, payload: { message?: string }): IState => {
      return {
        ...state,
        data: [],
        error: payload.message || "error",
        isLoading: false
      };
    }
  )
]);
