import NextAuth, { NextAuthOptions } from "next-auth/next";
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
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {},
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        console.log(credentials);
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

        // Any object returned will be saved in `user` property of the JWT
        // console.log(user);
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign",
  },
  secret: process.env.JWT_SECRET,
});

// export default NextAuth({
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       authorize: async (credentials, req) => {
//         console.log("credentials= ", credentials);
//         const { email, password } = credentials;

//         await connectMongo();

//         const user = await User.findOne({ email });
//         // const user = await userExists(db, "users", { email: credentials.email });

//         if (!user) {
//           // no user with the entered email

//           throw new Error("No user found!");
//         }
//         console.log("user= ", user);

//         // found a user with that email address, check for password
//         const isValid = await verifyPassword(password, user.password);

//         if (!isValid) {
//           throw new Error("Invalid password! Try again!");
//         }

//         // authorization succeeded

//         // return object that is encoded for JWT token
//         return { email: user.email };
//       },
//     }),
//   ],
//   pages: {
//     signIn: "auth/signin",
//   },
// });
