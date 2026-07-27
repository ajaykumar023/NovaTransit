import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_4kYgadl2Fm76fkkcoBpxYCpacCqN2nA",
  authDomain: "novatransit-fd18a.firebaseapp.com",
  projectId: "novatransit-fd18a",
  storageBucket: "novatransit-fd18a.firebasestorage.app",
  messagingSenderId: "783060684214",
  appId: "1:783060684214:web:dce92a93457f1227b1c517",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;