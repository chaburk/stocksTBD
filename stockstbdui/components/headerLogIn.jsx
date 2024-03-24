'use client';
import React from "react";
import {useSession, signOut} from "next-auth/react";
import Link from "next/link";

/*
/   This keeps the Login within the header up to date.
/   When a user is signed in, it will switch to sign out, and remain as sign in otherwise.
*/
const HeaderLogIn = () => {
  const {data: session} = useSession();
  // Sign out is handled by a pre-existing function within the next-auth library.
  // Once signed out, the user will return to the login page.
  if(session && session.user){
    return (
        <div className="w-screen bg-primary-green flex items-center p-1">
            <button className="basic_text_italic text-xl pr-5 ml-auto" onClick={() => signOut({callbackUrl: "/login"})}>Sign Out</button>
        </div>
    );
  }

  return (
    <div className="w-screen bg-primary-green flex items-center p-1">
        <Link href="login" className="ml-auto">
        <p className="basic_text_italic text-xl pr-5">Login</p>
        </Link>
    </div>
    );
}

export default HeaderLogIn;