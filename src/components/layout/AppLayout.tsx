"use client";

import AdminNavbar from "@/components/layout/AdminNavbar";
import ClientNavbar from "@/components/layout/ClientNavbar";
import Footer from "@/components/layout/Footer";
import Logo from "@/components/ui/logo";
import React from "react";

import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import UserAuth from "@/components/auth/UserAuth";
import ReactQueryProvider from "@/components/provider/QueryClientProvider";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const isAdminPath = pathname.startsWith("/admin");
  const isAuthPath = pathname.startsWith("/auth");

  return (
    <ReactQueryProvider>
      <SessionProvider>
        {!isAuthPath && (
          <div className="sticky top-0 z-10">
            <div className="border-b bg-white">
              <div className="container flex items-center justify-between">
                <div className="flex gap-5">
                  <Logo />
                  {isAdminPath ? <AdminNavbar /> : <ClientNavbar />}
                </div>
                <UserAuth />
              </div>
            </div>
          </div>
        )}
        {children}
        <Toaster />
        {!isAuthPath ? !isAdminPath && <Footer /> : ""}
      </SessionProvider>
    </ReactQueryProvider>
  );
};

export default AppLayout;
