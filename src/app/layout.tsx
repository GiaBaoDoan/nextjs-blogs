import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/layout/AppLayout";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tạp chí kiến thức và khoa học",
  description: "Viết code bằng cả con tim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
