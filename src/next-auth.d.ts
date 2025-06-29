import NextAuth, { DefaultSession } from "next-auth";

/** Augment the built‑in session types */
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
  }

  interface JWT {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}
