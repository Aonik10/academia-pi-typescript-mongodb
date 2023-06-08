import "./globals.scss";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import { NextAuthProvider } from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Academia Pi",
    description: "Academia Pi Website",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <NextAuthProvider>
                <body className={inter.className}>{children}</body>
            </NextAuthProvider>
        </html>
    );
}
