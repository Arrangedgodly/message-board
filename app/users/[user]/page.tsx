'use client'

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { signOutUser, getUser } from "@/lib/firebase";
import { useEffect, useState } from "react";

interface Params {
  params: {
    user: string;
  };
}

interface UserData {
  name: string;
  email: string;
  photoURL: string;
  uid: string;
}

export default function Page({ params }: Params) {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState<UserData | null>(null);
  const currentUser = user?.uid === params.user;

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(params.user);
      setUserData(data);
    }

    fetchUser();
  }, [params.user]);

  return (
    <div>
      {userData !== null && (
        <>
          <h1>{userData.name}</h1>
        </>
      )}
      {currentUser && (
        <button onClick={signOutUser}>Sign Out</button>
      )}
    </div>
  );
}
