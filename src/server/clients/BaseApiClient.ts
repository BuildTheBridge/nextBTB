import { clearTokens, setTokens } from "@/lib/clients/auth";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import Cookise from "js-cookie";

export interface Tokens {
  accessToken: string;
  refreshToken?: string;
}

class BaseApiClient {
  protected axios: AxiosInstance;

  private tokens?: Tokens;

  public constructor(baseURL: string, tokens?: Tokens) {
    this.tokens = tokens;

    this.axios = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axios.interceptors.request.use((config) => {
      const accessToken = this.getAccessToken();
      if (accessToken != null) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    });

    this.axios.interceptors.response.use(
      (response) => {
        if (response.data.code === 4) {
          return this.refresh(response.config);
        } else if (response.data.code !== 1) {
          console.error("API Error", response.data);
        }
        return response;
      },
      async (error) => {
        const {
          status,
          statusText,
          data,
          request: { responseURL },
        } = error.response;
        console.error(
          `API Error => responseURL : ${responseURL} status:${status} statusText:${statusText} data:${JSON.stringify(
            data
          )}`
        );
        const accessToken = this.getAccessToken();

        if (accessToken != null && status === 401) {
          // 토큰 만료 혹은 인증 실패 시
          return this.refresh(error.config);
        }

        return Promise.reject(error);
      }
    );
  }

  // 기본 accessToken 설정이 안되어 있다면 브라우저 쿠키에서 get
  public getAccessToken() {
    if (this.tokens?.accessToken) {
      return this.tokens.accessToken;
    }
    if (typeof window !== "undefined") {
      return Cookise.get(
        process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY ?? "ACCESS_TOKEN"
      );
    }
  }

  // 기본 refresh 토큰이 설정되어 있지 않다면 브라우저 쿠키에서 get
  public getRefreshToken() {
    if (this.tokens?.refreshToken) {
      return this.tokens.refreshToken;
    }
    if (typeof window !== "undefined") {
      return Cookise.get(process.env.NEXT_PUBLIC_TOKEN_KEY ?? "REFRESH_TOKEN");
    }
  }

  // refresh 및 요청을 다시 시도
  private async refresh(config: AxiosRequestConfig) {
    const refreshToken = this.getRefreshToken();

    if (refreshToken != null) {
      try {
        const refreshResult = await axios.request({
          baseURL: process.env.NEXT_PUBLIC_COMMON_API_URL,
          url: "/auth/token/refresh",
          method: "POST",
          data: {
            refreshToken,
          },
        });

        if (refreshResult.data.code === 1) {
          setTokens({
            accessToken: refreshResult.data.result.accessToken,
            refreshToken: refreshResult.data.result.refreshToken,
          });

          // 무한 에러 방지용 axios 기본 인스턴스로 재시도
          return axios.request({
            ...config,
            headers: {
              ...config.headers,
              Authorization: `Bearer ${refreshResult.data.result.accessToken}`,
            },
          });
        }
      } catch (error) {
        console.error("[Refresh Error]", error);
      }
    }

    if (typeof window !== "undefined") {
      clearTokens();
    }

    return Promise.reject(new Error("로그인을 연장할 수 없습니다."));
  }
}

export default BaseApiClient;
