import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

/*

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/utils/database";
import { authenticate } from "@/utils/api_resources";
import type { Session } from "next-auth";
import User from "@/models/user";

console.log({
    clientId: process.env.GOOGLE_ID ?? "no-id", //change
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "no-secret", //change
});

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "no-id", //change
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "no-secret", //change
        }),
    ],
    callbacks: {
        async session({ session }: { session: Session }) {
            console.log("La session es: ", session);
            return session;
        },
        async signIn({ user, account, profile, email, credentials }) {
            let obj = {
                user,
                account,
                profile,
                email,
                credentials,
            };
            console.log("La data es: ", obj);
            return true;
        },
    },
});

export { handler as GET, handler as POST };

*/
