import { db } from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import { getServerSession,NextAuthOptions } from "next-auth";




const authOptions:NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
        username: {
          label: "Username",
          type: "text",
          placeholder: "Sai Sawant",
        },
      },
      async authorize(credentials) {
        const user = {
          id: 1,
          username: "Sai Sawant",
          email: "saisawant2003@gmail.com",
          password: "123456",
        };
        return user;
      },
    }),
  ],
  secret: process.env.MY_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};
export default authOptions;
export const  getAuthSession = ()=> getServerSession(authOptions)
