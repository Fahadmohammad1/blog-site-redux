import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// import rootReducer from "./reducers/rootReducer";

const store = createStore(composeWithDevTools());

export default store;
