import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req, res) {
        const { email, password } = credentials;

        if (email !== "mattmascarenhas7@gmail.com" || password !== "123456") {
          throw new Error("Invalid credentials");
        }

        return {
          id: "1234",
          name: "Matheus Mascarenhas",
          email: "mattmascarenhas7@gmail.com",
        };
      },
    }),
  ],
  pages: {
    signIn: "auth/signin",
    // error: "auth/error",
    // signOut: "auth/signout",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
