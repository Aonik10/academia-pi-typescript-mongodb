import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            name: string;
            email: string;
            password: string | null;
            firstName: string | "Alumno";
            lastName: string | null;
            image: string | "https://iili.io/H4uyVZF.webp";
            inscriptions: string[];
            reffersCodes: string[];
        };
    }
}
