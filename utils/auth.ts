import User from "@/models/user";
import { compare } from "bcrypt-ts";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "./database";
import { createUser } from "@/app/api/users/route";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
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

                if (!user || !(await compare(credentials.password, user.password))) {
                    return null;
                }

                return user;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "no-id", //change
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "no-secret", //change
            authorization: {
                //condición para preguntar siempre con que cuenta se desea iniciar sesion
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
    callbacks: {
        session: async ({ session, token }) => {
            let user = session.user;
            let nameArray = [user.firstName, user.lastName];
            if (user.name) nameArray = user.name.split(" "); // el login viene de google

            await connectToDB();

            let existingUser = await User.findOne({ email: user.email });

            if (!existingUser) {
                const newUser = {
                    email: user.email,
                    password: null,
                    firstName: nameArray[0],
                    lastName: nameArray[nameArray.length - 1],
                    image: user.image,
                };
                existingUser = await createUser(newUser);
            }

            return {
                ...session,
                user: existingUser,
                token: token,
            };
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                console.log("first", u);
                return {
                    ...token,
                    id: u.id,
                };
            }
            return token;
        },
    },
    pages: {
        signIn: "/login",
    },
};
