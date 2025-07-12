import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { JWT, NextAuthOptions } from "next-auth";
import { login } from "@/lib/auth";
import { User } from "@/types/user.type";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = (await login(credentials)) as User;
        if (user) {
          return {
            id: user._id,
            name: user.username,
            email: user.email,
            image: user.image,
          };
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }

      if (user) {
        token.user = user;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user as JWT;
      return session;
    },
  },
  session: {
    maxAge: 1 * 24 * 60 * 60,
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
