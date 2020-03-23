import { createStore, combine } from "@reatom/core";
import { materialsAtom } from "../components/content/materials";

export const store = createStore(combine([materialsAtom]));
