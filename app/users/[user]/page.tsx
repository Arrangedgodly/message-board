'use client'

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { signOutUser } from "@/lib/firebase";

interface Params {
  params: {
    user: string;
  };
}

export default function Page({ params }: Params) {
  const [user, loading, error] = useAuthState(auth);
  const currentUser = user?.uid === params.user;

  return (
    <div>
      {currentUser && (
        <button onClick={signOutUser}>Sign Out</button>
      )}
    </div>
  );
}
