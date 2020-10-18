import { call, put, takeLatest } from "redux-saga/effects";
import { queryPosts } from "./posts.queries";

import actions from "./actions";

function* fetchPosts() {
    try {
        const response = yield call(queryPosts);

        if (response) {
            yield put({
                type: actions.fetchPostsSuccess,
                payload: response || [],
            });
        }
    } catch (err) {}
}

export function* getAllPosts() {
    yield takeLatest(actions.fetchPosts, fetchPosts);
}
