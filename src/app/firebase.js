import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDjm1-9UOGJndwwPKsd87I7-BqKU0zwHWc",
  authDomain: "discord-clone-2bdcc.firebaseapp.com",
  projectId: "discord-clone-2bdcc",
  storageBucket: "discord-clone-2bdcc.appspot.com",
  messagingSenderId: "845931199955",
  appId: "1:845931199955:web:ab723bc03060d59edf0326",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
export const channelRef = collection(db, "channels");
