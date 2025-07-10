"use client";

import ReactQueryProvider from "@/components/provider/QueryClientProvider";
import Footer from "@/components/layout/Footer";
import BacktoTop from "@/components/ui/BacktoTop";
import Navbar from "@/components/layout/Navbar";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner"; //
import { usePathname } from "next/navigation";
import { ADMIN_PREFIX, AUTH_PATHS } from "@/constants/path";

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
          {!isAuthPath && <Navbar />}
          {children}
          <Toaster />
          <BacktoTop />
          {!isAuthPath && !isAdminPath && <Footer />}
        </SessionProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
