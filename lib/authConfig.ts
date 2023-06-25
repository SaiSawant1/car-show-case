import GoogleProvider from "next-auth/providers/google";
import { getServerSession,NextAuthOptions } from "next-auth"
const authOptions:NextAuthOptions = {
  session:{
    strategy:"jwt"
  },
  pages:{
    signIn:'sign-in'
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks:{
    async session({token,session}){
      if(token){
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
        session.user.username = token.username
      }
      return session
    }
  }
};

export const getAuthSession=()=>getServerSession (authOptions)
export default authOptions;
 