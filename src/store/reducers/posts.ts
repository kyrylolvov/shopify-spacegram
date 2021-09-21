import { createReducerFunction, ImmerReducer } from "immer-reducer";
import AxiosResponse from "axios";

export interface Post {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export interface PostsState {
  posts: Post[] | null;
}

const initialState: PostsState = {
  posts: null,
};

export class PostsReducer extends ImmerReducer<PostsState> {
  setPosts(posts: Post[]) {
    this.draftState.posts = posts;
  }
}

export const postsReducer = createReducerFunction(PostsReducer, initialState);
