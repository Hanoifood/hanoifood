import actions from "./posts.actions";

export const fetchPosts = () => (dispatch) => dispatch(actions.fetchPosts());

export const fetchPostsSuccess = (posts) => (dispatch) => {
    dispatch(actions.fetchPostsSuccess(posts));
};

export const setCategories = (categories) => (dispatch) =>
    dispatch(actions.setCategories(categories));
