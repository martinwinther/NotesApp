import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARmAvmznTFoB1hYjMIL4JguLZUcLLRLew",
  authDomain: "react-notes-150be.firebaseapp.com",
  projectId: "react-notes-150be",
  storageBucket: "react-notes-150be.appspot.com",
  messagingSenderId: "465603682676",
  appId: "1:465603682676:web:293bb75bd9689400bc4c21"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
