import type { NextApiRequest, NextApiResponse } from "next";

import MemberService from "@/server/services/member/MemberService";
import { CommonResponse } from "@/server/services/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const thisResult = await MemberService.getInstance().getMember();
  if (thisResult) {
    return res.status(200).json(thisResult);
  } else {
    return res.status(401).json(CommonResponse.FAILED);
  }
}
