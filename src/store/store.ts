import createStore from "redux-zero";
import { connect } from "redux-zero/devtools";
import { applyMiddleware } from "redux-zero/middleware";
import { initialState } from "./rootStore";

const middlewares = connect ? applyMiddleware(connect(initialState)) : [];
export const store: any = createStore({ initialState }, middlewares);