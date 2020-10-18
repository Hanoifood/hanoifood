import { all, call } from "redux-saga/effects";

import { getAllPosts } from "./posts/posts.sagas";

export default function* rootSaga() {
    yield all([call(getAllPosts)]);
}
