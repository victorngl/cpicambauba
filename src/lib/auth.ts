import type { NextAuthOptions } from "next-auth";
import { prisma } from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
    /*
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
    },*/
    session: {
        strategy: "jwt",
    },
    callbacks: {
        jwt: ({ token, user }) => {

            return ({ ...token, ...user })
        },
        session: ({ session, token, user }) => {

            session.user = token;

            return session;
        },
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })

    ],

};