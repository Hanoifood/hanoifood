import products from "./posts/posts.reducer";

import { combineReducers } from "redux";

const reducers = {
    products,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
