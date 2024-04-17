import nodemailer from "nodemailer";

export interface MemberMailData {
  MB_EML_ADDR: string;
}

export interface ContactUsMailData {
  emailAddr: string;
  name: string;
  addr: string;
  content: string;
  phoneNum: string;
  businessName: string;
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_MAIL_USER,
    pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
  },
});
export async function sendContactUsMailFn(request: ContactUsMailData) {
  const { addr, businessName, content, emailAddr, name, phoneNum } = request;
  const mailData = {
    // to가 받는 사람
    to: emailAddr,
    title: `[신규 문의] ${name} | ${businessName}`,
    html: `
        <h1>신규 문의 도착!</h1>
        <br/>
        <div>문의자 성명 : ${name}</div>
        <br/>
        <div>문의자 업체명 : ${businessName}</div>
        <br/>
        <div>문의자 전화번호 : ${phoneNum}</div>
        <br/>
        <div>문의자 주소 : ${addr}</div>
        <br/>
        <div>문의 내용 : ${content}</div>
        <br/>
        `,
  };
  const info = await transporter.sendMail(mailData);
  return info;
}

export async function sendMemberMailFn({ MB_EML_ADDR }: MemberMailData) {
  const mailData = {
    to: MB_EML_ADDR,
    title: `[BTB 소식] 반가운 기타등등의 소식을 전달드려요!`,
    html: `
        <h1>신규 소개 안내</h1>
        <div>신규 소개가 들어왔습니다!</div>
        <br/>
        <div>buildthebr.com 에서 새로운 소식을 확인해보세요!</div>
        <br/>
        <p></p>
        `,
  };
  const info = await transporter.sendMail(mailData);
  return info;
}
