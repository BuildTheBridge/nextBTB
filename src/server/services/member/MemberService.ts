import { CommonResponse } from "@/server/services/types";
import connection from "@/lib/server/db";
import { ICommonResponse } from "../types";
import { SELECT_MEMBER } from "../queries";

interface IMemberData {
  MB_NO: number;
  MB_NM: string;
  MB_TEL_NO: string;
  MB_EML_ADDR: string;
  MB_ID: string;
  MB_TYPE: string;
  MB_USE_YN: string;
  MB_REG_DT: string;
}

// export const MemberService = (request: IRequest) => {
//   // if (request.request.body.re === "good ") {
//   console.log("바디 들어옴", request);
//   // }
//   connection.query(SELECT_MEMBER, (err, result) => {
//     if (err) {
//       console.log(err);
//       return err;
//     } else {
//       if (result) {
//         console.log("ser", result);

//         return result;
//       } else return "no";
//     }
//   });
// };

class MemberService {
  private static instance: MemberService;

  public static getInstance = () => {
    if (this.instance == null) {
      this.instance = new MemberService();
    }
    return this.instance;
  };

  public getMember = async (): Promise<ICommonResponse<IMemberData[]>> => {
    connection.query(SELECT_MEMBER, (err, result) => {
      if (err) {
        console.log(err);
        return err;
      } else {
        if (result) {
          console.log("get member", result);
          return result;
        }
      }
    });

    return {
      ...CommonResponse.FAILED,
      message: "get-member-fail",
    };
  };
}

export default MemberService;
