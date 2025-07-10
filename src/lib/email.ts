import { EmailType } from "@/constants/enum";
import nodemailer from "nodemailer";

type SendVerificationEmailOptions = {
  to: string;
  userId: string;
  token: string;
  type: EmailType;
};

export const sendEmail = async ({
  to,
  userId,
  type,
  token,
}: SendVerificationEmailOptions) => {
  const link =
    type === EmailType.VERIFY
      ? `${process.env.NEXT_PUBLIC_API_URL}/auth/verify/${userId}/${token}`
      : `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password/${userId}/${token}`;

  const subject =
    type === EmailType.VERIFY ? "Xác thực email" : "Đặt lại mật khẩu";

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "Gmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject: subject,
      html: `
      <div style="font-family:sans-serif;">
        <h2>${subject}</h2>
        <p>Nhấn vào nút bên dưới để xác minh:</p>
        <a href="${link}" style="padding: 10px 20px; background: #4CAF50; color: white; text-decoration: none;">Bấm vào đây</a>
        <p>Hoặc copy link này: <a href="${link}">${link}</a></p>
      </div>
    `,
    });
  } catch (error) {
    throw new Error("Gửi yêu cầu thất bại");
  }
};
