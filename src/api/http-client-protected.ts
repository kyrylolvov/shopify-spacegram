import { AxiosRequestConfig } from "axios";
import HttpClient from "./http-client";

export default abstract class HttpClientProtected extends HttpClient {
  public constructor(baseURL: string) {
    super(baseURL);

    this.initializeRequestInterceptor();
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest);
  };

  private handleRequest = (config: AxiosRequestConfig) => {
    const modifiedConfig = config;

    modifiedConfig.headers.api_key = "CJhRsc7Eowi4pPjo4xdbM0W8zeheqDnjjur5Qzln";

    return config;
  };
}
