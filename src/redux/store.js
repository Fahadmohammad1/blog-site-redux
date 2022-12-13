import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import blogReducer from "./reducers/blogReducer";
// import rootReducer from "./reducers/rootReducer";

const store = createStore(blogReducer, composeWithDevTools());

export default store;
