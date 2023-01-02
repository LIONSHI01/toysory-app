import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import { connectMongo } from "../../../lib/db";
import User from "../../../models/userModel";
import { verifyPassword } from "../../../lib/hashPassword";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const { email, password } = credentials;
        await connectMongo();
        const user = await User.findOne({ email: email });

        if (!user) {
          throw Error("No user found with this email");
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          throw Error("Invalid password, please try again!");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
});
