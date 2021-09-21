import { createSelector, Selector } from "reselect";
import { Post } from "../reducers/posts";

import { State } from "../index";

const PostsState = (state: State) => state.postsReducer;

export const selectPosts: Selector<State, Post[] | null> = createSelector(
  PostsState,
  ({ posts }) => posts
);
