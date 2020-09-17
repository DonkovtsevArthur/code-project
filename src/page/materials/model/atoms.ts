import { declareAtom } from "@reatom/core";
import { materialsSuccess, materialsFetch, materialsError } from "./actions";
import { IState, Materials } from ".";

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
    (state: IState, payload: Materials[]): IState => {
      console.log("payload", payload);
      return {
        ...state,
        data: payload,
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
