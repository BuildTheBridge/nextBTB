import axios from "axios";
import { ICommonResponse } from "../services/types";

export const getMembers = async (request: any) => {
  const response = await axios.request<ICommonResponse<any[]>>({
    method: "POST",
    url: "/api/member/read",
    data: request,
  });
  return response;
};
