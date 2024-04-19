import {
  ContactUsRequest,
  MemberMailRequest,
} from "../server/services/mail/MailService";
import { ICommonResponse } from "../server/services/types";
import BaseApiClient from "./BaseApiClient";

class MailApiClient extends BaseApiClient {
  private static instance: MailApiClient;

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new MailApiClient();
    }
    return this.instance;
  }

  public sendMemberMail = (request: MemberMailRequest) => {
    this.axios.request<ICommonResponse<null>>({
      method: "POST",
      url: "/api/mail/send-member",
      data: request,
    });
  };

  public sendContactUsMail = (request: ContactUsRequest) => {
    this.axios.request<ICommonResponse<null>>({
      method: "POST",
      url: "/api/mail/send-contactus",
      data: request,
    });
  };
}

export default MailApiClient;
