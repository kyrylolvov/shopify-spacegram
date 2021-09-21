import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import MainProtected from "../api/main-protected";
import { PostsActions } from "./actions/posts";
import { postsReducer } from "./reducers/posts";

export const api = {
  mainProtectedApi: MainProtected.getInstance(),
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(api))
);

const rootReducer = combineReducers({
  postsReducer,
});

export type State = ReturnType<typeof rootReducer>;
export type Actions = PostsActions;

export default createStore(rootReducer, enhancer);
