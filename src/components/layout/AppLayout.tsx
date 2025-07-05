"use client";

import ReactQueryProvider from "@/components/provider/QueryClientProvider";
import Footer from "@/components/layout/Footer";
import ClientNavbar from "@/components/layout/ClientNavbar";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner"; //
import { usePathname } from "next/navigation";
import BacktoTop from "@/components/ui/BacktoTop";

const AUTH_PATHS = ["/login", "/register", "/forgot-password"];
const ADMIN_PREFIX = "/admin";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPath = AUTH_PATHS.some((p) => pathname?.startsWith(p));
  const isAdminPath = pathname?.startsWith(ADMIN_PREFIX);

  return (
    <ReactQueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SessionProvider>
          {!isAuthPath && <ClientNavbar />}
          {children}
          <Toaster />
          <BacktoTop />
          {!isAuthPath && !isAdminPath && <Footer />}
        </SessionProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
