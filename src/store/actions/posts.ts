import { createActionCreators } from "immer-reducer";

import { PostsReducer } from "../reducers/posts";
import { PostsRequestBody } from "../../api/main-protected";
import { AsyncAction } from "./common";

export const postsActions = createActionCreators(PostsReducer);

export type PostsActions = ReturnType<typeof postsActions.setPosts>;

export const getPosts =
  (body: PostsRequestBody): AsyncAction =>
  async (dispatch, _, { mainProtectedApi }) => {
    try {
      const posts = await mainProtectedApi.getPosts(body);

      // @ts-ignore
      dispatch(postsActions.setPosts(posts));
    } catch (e) {
      console.log(e);
    }
  };
