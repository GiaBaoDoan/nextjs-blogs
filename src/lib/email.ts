import nodemailer from "nodemailer";

type SendVerificationEmailOptions = {
  email: string;
  link: string;
};

export const sendEmail = async ({
  email,
  link,
}: SendVerificationEmailOptions) => {
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
      to: email,
      subject: "Xác minh email của bạn",
      html: `
      <div style="font-family:sans-serif;">
        <h2>Xác minh email của bạn</h2>
        <p>Nhấn vào nút bên dưới để xác minh:</p>
        <a href="${link}" style="padding: 10px 20px; background: #4CAF50; color: white; text-decoration: none;">Xác minh ngay</a>
        <p>Hoặc copy link này: <a href="${link}">${link}</a></p>
      </div>
    `,
    });
  } catch (error) {
    throw new Error("không gửi được email");
  }
};
