import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toastErrorNotify, toastSuccessNotify } from "./helper/ToastNotify";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email, password) => {
  try {
    toastSuccessNotify("Register performed");
    const user = await createUserWithEmailAndPassword(auth, email, password);

    return user;
  } catch (error) {
    toastErrorNotify("Register can not be performed");
  }
};
export const login = async (email, password) => {
  try {
    toastSuccessNotify("Login performed");
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toastErrorNotify("Login can not be performed");
  }
};
export const logout = async () => {
  try {
    toastSuccessNotify("Logout performed");
    await signOut(auth);
    return true;
  } catch (error) {
    toastErrorNotify("Logout can not be performed");
  }
};

export default app;
