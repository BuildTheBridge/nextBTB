import connection from "@/lib/server/db";
import { CHECK_AVAILABLE_MEMBER } from "../queries";
import nodemailer from "nodemailer";

interface IRequest {
  request: any;
}

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_MAIL_USER,
    pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
  },
});
export async function sendEmail({ subject, from, message }: EmailData) {
  const mailData = {
    to: "frontendtt@gmail.com",
    subject: `[BLOG] ${from}: ${subject}`,
    from,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <p>보낸 사람: ${from}</p>
    `,
  };

  const info = await transporter.sendMail(mailData);
  console.log("Message sent: %s", info.messageId);

  return info;
}

export const sendMailerService = (request: IRequest) => {
  console.log(request);
  // 요청 본문에서 body 객체 추출

  const email = request?.request; // 예를 들어, 요청 본문에서 이메일 값을 추출

  connection.query(CHECK_AVAILABLE_MEMBER, [email], (err, result) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      if (result) {
        console.log("ser", result);
        sendEmail({
          from: "frontendtt@gmail.com",
          subject: "asdf",
          message: "hihi",
        });
        return result;
      } else return "no";
    }
  });
};
