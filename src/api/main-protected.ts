import HttpClient from "./http-client";
import { Post } from "../store/reducers/posts";

export interface PostsRequestBody {
  count?: number;
  start_date?: string;
  end_date?: string;
}

export default class MainProtected extends HttpClient {
  private static instanceCached: MainProtected;

  private constructor() {
    super("https://api.nasa.gov/planetary");
  }

  static getInstance = () => {
    if (!MainProtected.instanceCached) {
      MainProtected.instanceCached = new MainProtected();
    }

    return MainProtected.instanceCached;
  };

  public getPosts = (body: PostsRequestBody) =>
    this.instance.get<Post[]>(
      `/apod?api_key=CJhRsc7Eowi4pPjo4xdbM0W8zeheqDnjjur5Qzln${
        body.count
          ? `&count=${body.count}`
          : `${body.start_date ? `&start_date=${body.start_date}` : ""}${
              body.end_date ? `&start_date=${body.end_date}` : ""
            }`
      }
      `
    );
}
