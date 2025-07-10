import Image from "next/image";
import BG from "@/public/bg-auth.webp";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="relative hidden md:block">
        <Image
          src={BG}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      {children}
    </section>
  );
}
