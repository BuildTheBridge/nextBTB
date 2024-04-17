import type { NextApiRequest, NextApiResponse } from "next";

import MailService from "@/server/services/mail/MailService";
import { CommonResponse } from "@/server/services/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const thisResult = await MailService.getInstance().sendMemberMail(req.body);

  if (thisResult) {
    return res
      .status(200)
      .json({ status: CommonResponse.SUCCESS, result: thisResult });
  } else {
    return res.status(401).json(CommonResponse.FAILED);
  }
}
