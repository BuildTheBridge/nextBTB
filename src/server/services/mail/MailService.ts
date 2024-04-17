import { CommonResponse } from "@/server/services/types";
import { z } from "zod";
import { ICommonResponse } from "../types";
import connection from "@/lib/server/db";
import { CHECK_AVAILABLE_MEMBER } from "../queries";
import { sendContactUsMailFn, sendMemberMailFn } from "@/lib/clients/utils";

// interface IMemeberMailRequest {
//   MB_EML_ADDR: string;
// }

const memberMailRequestSchema = z.object({
  MB_EML_ADDR: z.string({ required_error: "user email 값이 없습니다." }),
});
const contactUsMailRequestSchema = z.object({
  emailAddr: z.string({ required_error: "email 값이 없습니다." }),
  name: z.string({ required_error: "name 값이 없습니다." }),
  addr: z.string({ required_error: "addr 값이 없습니다." }),
  content: z.string({ required_error: "content 값이 없습니다." }),
  phoneNum: z.string({ required_error: "phoneNum 값이 없습니다." }),
  businessName: z.string({ required_error: "businessName 값이 없습니다." }),
});

export type MemberMailRequest = z.infer<typeof memberMailRequestSchema>;
export type ContactUsRequest = z.infer<typeof contactUsMailRequestSchema>;

// interface IContactUs {
//   emailAddr: string;
//   name: string;
//   addr: string;
//   content: string;
//   phoneNum: string;
//   businessName: string;
// }

// // 사용자에게 고정된 text의 이메일만 전송
// export const sendMemberMailService = (request: IRequest) => {
//   const { MB_EML_ADDR, content, title } = request;

//   // 사용자의 email이 DB에 있는 경우에만 전송
//   connection.query(CHECK_AVAILABLE_MEMBER, [MB_EML_ADDR], (err, result) => {
//     if (err) {
//       console.log(err);
//       return err;
//     } else {
//       if (result) {
//         sendEmail({
//           mailType: "Member",
//           from: "frontendtt@gmail.com",
//           title: title!,
//           message: content!,
//         });
//         return result;
//       } else return "no";
//     }
//   });
// };

// export const sendContactUsMailService = (request: IContactUs) => {
//   const { addr, businessName, content, emailAddr, name, phoneNum } = request;

//   sendEmail({
//     mailType: "ContactUs",
//     from: "frontendtt@gmail.com",
//     title: `${name}로 부터 문의 사항 도착했다 세훈아`,
//     message: content!,
//   });
// };

class MailService {
  private static instance: MailService;

  public static getInstance = () => {
    if (this.instance == null) {
      this.instance = new MailService();
    }
    return this.instance;
  };

  public sendMemberMail = async (
    request: MemberMailRequest
  ): Promise<ICommonResponse<null>> => {
    const validated = memberMailRequestSchema.safeParse(request);

    if (validated.success === false) {
      return {
        ...CommonResponse.PARAMETER_INVALID,
        message: validated.error.message,
      };
    }

    const { MB_EML_ADDR } = request;

    connection.query(CHECK_AVAILABLE_MEMBER, [MB_EML_ADDR], (err, result) => {
      if (err) {
        console.log("member-mail-send ", err);
        return err;
      } else {
        if (result) {
          sendMemberMailFn({
            MB_EML_ADDR,
          });
          return result;
        }
      }
    });

    return {
      ...CommonResponse.SEND_MAIL_FAIL,
      message: "멤버 메일 전송 실패",
    };
  };

  public sendContactUsMail = async (
    request: ContactUsRequest
  ): Promise<ICommonResponse<null>> => {
    const validated = contactUsMailRequestSchema.safeParse(request);
    if (validated.success === false) {
      return {
        ...CommonResponse.PARAMETER_INVALID,
        message: validated.error.message,
      };
    }

    sendContactUsMailFn(request);

    return {
      ...CommonResponse.FAILED,
      message: "contact us mail 실패",
    };
  };
}

export default MailService;
