import { declareAtom } from "@reatom/core";
import { materialsSuccess } from "./actions";
import { IState, IMaterials } from ".";

const initialState: IState = {
  data: [],
  error: "",
  isLoading: false
};

export const materialsAtom = declareAtom(["materials"], initialState, on => [
  on(
    materialsSuccess,
    (state: IState, payload: [IMaterials]): IState => {
      return {
        ...state,
        data: payload,
        isLoading: false
      };
    }
  )
]);


