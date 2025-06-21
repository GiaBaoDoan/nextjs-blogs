import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isAuth = !!token;

  const isProtected = req.nextUrl.pathname.startsWith("/admin");
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth");

  if (isProtected && !isAuth) {
    const loginUrl = new URL("/auth/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuth && isAuthPage) {
    const homeUrl = new URL("/", req.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/auth/:path*"],
};
