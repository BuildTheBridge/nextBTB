import { IMemberData } from "../server/services/member/MemberService";
import { ICommonResponse } from "../server/services/types";
import BaseApiClient from "./BaseApiClient";

class MemberApiClient extends BaseApiClient {
  private static instance: MemberApiClient;

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new MemberApiClient();
    }
    return this.instance;
  }

  public readMember = () => {
    return this.axios.request<ICommonResponse<IMemberData[]>>({
      method: "GET",
      url: "/api/member/read",
    });
  };
}

export default MemberApiClient;
