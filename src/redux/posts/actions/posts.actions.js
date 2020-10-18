import { createActions } from "redux-actions";

import { actionTypes } from "./posts.types";

const prefix = "POSTS";

const actionMap = {};

export default createActions(actionMap, ...actionTypes, { prefix });
