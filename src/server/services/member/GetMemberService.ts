import connection from "@/lib/server/db";
import { SELECT_MEMBER } from "../queries";

interface IRequest {
  request: any;
}

export const getMemberService = (request: IRequest) => {
  // if (request.request.body.re === "good ") {
  console.log("바디 들어옴", request);
  // }
  connection.query(SELECT_MEMBER, (err, result) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      if (result) {
        console.log("ser", result);

        return result;
      } else return "no";
    }
  });
};
