import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducers";

import thunk from "redux-thunk";

const middleware = [thunk];
const estadoInicial = {};

const store = createStore(
	rootReducer,
	estadoInicial,
	applyMiddleware(...middleware)
);

export default store;
