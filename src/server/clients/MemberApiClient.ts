import { IMemberData } from "../services/member/MemberService";
import { ICommonResponse } from "../services/types";
import BaseApiClient from "./BaseApiClient";

// export const getMembers = async (request: any) => {
//   const response = await axios.request<ICommonResponse<any[]>>({
//   });
//   return response;
// };

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
