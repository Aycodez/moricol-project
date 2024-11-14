import { getServerSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { AuthApi } from "@/api";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await AuthApi.login({
            email: credentials.email,
            password: credentials.password,
          });

          if (response.status_code !== 200 || !response.status) {
            return null;
          }

          const user = response.data.userDetails;
          user.token = response.data.token;

          return user;
          
        } catch (error) {
          throw new Error(error as string ?? 'cannot login, something went wrong');
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
     
      if (user) {
        token.id = user._id;
        token.email = user.email;
        token.firstname = user.firstname;
        token.lastname = user.lastname;
        token.language = user.language;
        token.token = user.token;
      }
      
      return token;
    },
    async session({ session, token }: { session: any; token: JWT; user: any }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.token = token.token;
        session.user.firstname = token.firstname;
        session.user.lastname = token.lastname;
        session.user.language = token.language; 
      return session;

      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};



export const getUserSession = async () => {
  return await getServerSession(authOptions);
}