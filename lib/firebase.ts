import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, getDoc, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { redirect } from "next/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyBjo6xaSdpIjZytCI94EzmK7SApagb7JnY",
  authDomain: "positivity-board.firebaseapp.com",
  projectId: "positivity-board",
  storageBucket: "positivity-board.appspot.com",
  messagingSenderId: "448457611450",
  appId: "1:448457611450:web:7d918d4b790c99f0d74a83",
  measurementId: "G-0PRFS1EBHY",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
const usersCollection = collection(db, "users");

const createUser = async (user: any) => {
  await setDoc(doc(usersCollection, user.uid), user);
};

export const getUser = async (uid: string) => {
  const userDoc = doc(db, "users", uid);
  const docSnap = await getDoc(userDoc);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export const signInWithGoogle = async () => {
  await signInWithPopup(auth, googleAuthProvider);
  if (auth.currentUser) {
    const user = await getUser(auth.currentUser.uid);
    if (!user) {
      createUser({
        uid: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoUrl: auth.currentUser.photoURL,
      });
    }
    redirect("/");
  }
};

export const signUpWithEmail = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password);
  if (auth.currentUser) {
    const user = await getUser(auth.currentUser.uid);
    if (!user) {
      createUser({
        uid: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoUrl: auth.currentUser.photoURL,
      });
    }
    redirect("/");
  }
};

export const signInWithEmail = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
  if (auth.currentUser) {
    const user = await getUser(auth.currentUser.uid);
    if (!user) {
      createUser({
        uid: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoUrl: auth.currentUser.photoURL,
      });
    }
    redirect("/");
  }
};

export const signOutUser = async () => {
  await signOut(auth);
  redirect("/login");
}

