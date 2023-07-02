import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBjo6xaSdpIjZytCI94EzmK7SApagb7JnY",
  authDomain: "positivity-board.firebaseapp.com",
  projectId: "positivity-board",
  storageBucket: "positivity-board.appspot.com",
  messagingSenderId: "448457611450",
  appId: "1:448457611450:web:7d918d4b790c99f0d74a83",
  measurementId: "G-0PRFS1EBHY"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

