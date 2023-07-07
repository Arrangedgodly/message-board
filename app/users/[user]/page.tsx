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
  photoUrl: string;
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
    <>
      {userData !== null && (
        <>
          <h1 className="text-3xl m-5">{userData.name}</h1>
          <img src={userData.photoUrl} alt={userData.name} className="rounded-full w-32 h-32" />
          <p className="text-lg m-5">{userData.email}</p>
        </>
      )}
      {currentUser && (
        <button onClick={signOutUser} className="btn btn-ghost btn-lg">Sign Out</button>
      )}
    </>
  );
}
