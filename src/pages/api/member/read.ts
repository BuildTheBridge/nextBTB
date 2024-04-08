// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getMemberService } from "@/server/services/member/GetMemberService";
import { CommonResponse } from "@/server/services/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   if (req.body.re === "good") {
  const dd = await getMemberService({ request: req.body.re });
  return res.status(200).json({ status: CommonResponse.SUCCESS, result: dd });
  //   } else {
  //     return res.status(401).json(CommonResponse.FAILED);
  //   }
}
