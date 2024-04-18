import connectionFn from "@/lib/server/db";
import { CommonResponse } from "@/server/services/types";
import { SELECT_MEMBER } from "../queries";
import { ICommonResponse } from "../types";

export interface IMemberData {
  MB_NO: number;
  MB_NM: string;
  MB_TEL_NO: string;
  MB_EML_ADDR: string;
  MB_ID: string;
  MB_TYPE: string;
  MB_USE_YN: string;
  MB_REG_DT: string;
}

class MemberService {
  private static instance: MemberService;

  public static getInstance = () => {
    if (this.instance == null) {
      this.instance = new MemberService();
    }
    return this.instance;
  };

  public getMember = async (): Promise<ICommonResponse<IMemberData[]>> => {
    const res = (await connectionFn(SELECT_MEMBER)) as IMemberData[];
    if (res) {
      return {
        ...CommonResponse.SUCCESS,
        result: res,
        message: "get-member-success",
      };
    }
    return {
      ...CommonResponse.FAILED,
      message: "get-member-fail",
    };
  };
}

export default MemberService;
