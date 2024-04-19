import axios, { AxiosInstance } from "axios";

class BaseApiClient {
  protected axios: AxiosInstance;

  public constructor() {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    this.axios = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default BaseApiClient;
