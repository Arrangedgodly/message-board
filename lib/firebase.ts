import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBjo6xaSdpIjZytCI94EzmK7SApagb7JnY",
  authDomain: "positivity-board.firebaseapp.com",
  projectId: "positivity-board",
  storageBucket: "positivity-board.appspot.com",
  messagingSenderId: "448457611450",
  appId: "1:448457611450:web:7d918d4b790c99f0d74a83",
  measurementId: "G-0PRFS1EBHY"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
