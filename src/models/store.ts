import { createStore, combine } from "@reatom/core";
import { materialsAtom } from "../page/materials/model";

export const store = createStore(combine([materialsAtom]));
