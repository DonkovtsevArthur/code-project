import { createStore as createStoreReatom, combine } from "@reatom/core";
import { materialsAtom } from "../models/materials";

const rootAtom = combine({ materials: materialsAtom });

export const initialState = createStoreReatom(rootAtom).getState();
