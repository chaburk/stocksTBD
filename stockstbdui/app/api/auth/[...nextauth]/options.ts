import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers";
//CredentialsProvider({
//            name: "Sign In"
//        })
export const options: NextAuthOptions = {
    providers: [
        
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    pages: {
        signIn: "/login",
        newUser: "/profile"
    }
}