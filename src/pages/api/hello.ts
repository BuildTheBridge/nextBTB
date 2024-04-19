// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connection from "@/lib/server/db";
import { SELECT_MEMBER } from "@/server/queries/MemberQueries";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connection.query(SELECT_MEMBER, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result) {
        return res.status(200).json(result);
      } else console.log("no");
    }
  });
}
