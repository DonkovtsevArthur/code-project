import { declareAtom } from "@reatom/core";
import { error, request, success } from "./actions";
import { IState } from ".";

const initialState: IState = {
  data: [],
  error: "",
  isLoading: false
};

export const materialsAtom = declareAtom(["materials"], initialState, on => [
  on(request, state => {
    return {
      ...state,
      error: "",
      isLoading: true
    };
  }),
  on(success, (state, payload) => {
    return {
      ...state,
      data: payload,
      isLoading: false
    };
  }),
  on(error, (state, payload) => {
    return {
      ...state,
      data: [],
      error: payload.message || "error",
      isLoading: false
    };
  })
]);
