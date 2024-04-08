import { Tokens } from "@/server/clients/BaseApiClient";
import Cookies from "js-cookie";
export function setTokens(tokens: Tokens) {
  Cookies.set(
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY ?? "ACCESS_TOKEN",
    tokens.accessToken
  );
  if (tokens.refreshToken) {
    Cookies.set(
      process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY ?? "REFRESH_TOKEN",
      tokens.refreshToken
    );
  }
}

export function clearTokens() {
  Cookies.remove(process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY ?? "ACCESS_TOKEN");
  Cookies.remove(process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY ?? "REFRESH_TOKEN");
}
