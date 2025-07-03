import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/layout/AppLayout";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

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
      <body className={`${poppins.className}  antialiased`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
