import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

import { auth, db } from "@/firebase/firebase";

export const registerUser = async (
  email,
  password,
  name,
  role
) => {
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await setDoc(doc(db, "users", credential.user.uid), {
    uid: credential.user.uid,
    name,
    email,
    role,
    createdAt: new Date(),
  });

  return credential.user;
};

export const loginUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async () => {
  await signOut(auth);
};

export const getUserRole = async (uid) => {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.data();
};