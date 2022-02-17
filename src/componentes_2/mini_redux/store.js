import { createStore } from "redux";
import rootReducer from "./Reducers/testeReducer.js";

const store = createStore(rootReducer);

export default store;
