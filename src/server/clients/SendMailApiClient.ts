import axios from "axios";
import { ICommonResponse } from "../services/types";

export const sendMailer = async (request: any) => {
  const response = await axios.request<ICommonResponse<any[]>>({
    method: "POST",
    url: "/api/mailer/send",
    data: request,
  });
  return response;
};
