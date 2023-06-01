import User from "@/models/user";
import { compare } from "bcrypt-ts";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "./database";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectToDB();
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const user = await User.findOne({ email: credentials.email });
                console.log("el user es", user);

                if (!user || !(await compare(credentials.password, user.password))) {
                    return null;
                }

                return {
                    id: user._id,
                    email: user.email,
                    image: user.image,
                    randomKey: "Hey cool",
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "no-id", //change
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "no-secret", //change
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            console.log("Session Callback", { session, token });
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    randomKey: token.randomKey,
                },
            };
        },
        jwt: ({ token, user }) => {
            console.log("JWT Callback", { token, user });
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    randomKey: u.randomKey,
                };
            }
            return token;
        },
    },
};
