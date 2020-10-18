import { handleActions } from "redux-actions";
import actions from "./actions";

const INITIAL_STATE = {
    posts: null,
    categories: null,
};

const reducerMap = {
    [actions.fetchPostsSuccess]: (state, { payload }) => {
        return {
            ...state,
            posts: payload,
        };
    },
    [actions.setCategories]: (state, { payload }) => {
        return {
            ...state,
            categories: payload,
        };
    },
};

export default handleActions(reducerMap, INITIAL_STATE);
