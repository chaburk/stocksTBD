import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { GoogleProfile } from "next-auth/providers/google";
import { connectMongoDB } from "@backend/server/db/mongodb";
import User from "@backend/server/models/user";

const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session ({session,token}){
            if (session?.user) session.user.role = token.role
            return session
        },
        async signIn ({ user, account }) {
            console.log("User: ", user);
            console.log("Account: ", account);

            if(account.provider === "google"){
                const {name, email} = user;
                try {
                    await connectMongoDB();
                    const userExists = await User.findOne({email});

                    if(!userExists) {
                        const res = await fetch("http://localhost:3000/api/user", {
                        method: "POST",
                        headers: { 
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name,
                            email,
                            password: "GOOGLEOAUTH",
                        })
                        });

                        if(res.ok) {
                            return user;
                        }
                    }
                } catch(error) {
                    console.log(error);
                }
            }

            return user;
        },
    },
    pages: {
        signIn: "/dashboard",
        newUser: "/profile",
        signOut:"/",
    }
};

const handler = NextAuth(options);

export {handler as GET, handler as POST};