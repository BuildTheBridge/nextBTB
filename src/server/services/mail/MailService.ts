import { sendContactUsMailFn, sendMemberMailFn } from "@/lib/clients/utils";
import connectionFn from "@/lib/server/db";
import { CommonResponse } from "@/server/services/types";
import { z } from "zod";
import { CHECK_AVAILABLE_MEMBER } from "../queries";
import { ICommonResponse } from "../types";

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

    const res = await connectionFn(CHECK_AVAILABLE_MEMBER, [MB_EML_ADDR]);

    if (res) {
      sendMemberMailFn({
        MB_EML_ADDR,
      });
      return {
        ...CommonResponse.SUCCESS,
        message: "멤버 메일 전송 success",
      };
    }

    return {
      ...CommonResponse.SEND_MAIL_FAIL,
      message: "멤버 메일 전송 fail",
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
