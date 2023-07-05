import { initializeApp } from "firebase/app";
import { useDispatch } from "react-redux";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toastErrorNotify, toastSuccessNotify } from "./helper/ToastNotify";
import { loginSuccess } from "./features/authSlice";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};
export const app = initializeApp(firebaseConfig);
const auth = getAuth();

const useAuthCall = () => {
  const dispatch = useDispatch();
  const register = async (email, password) => {
    try {
      toastSuccessNotify("Register performed");

      const user = await createUserWithEmailAndPassword(auth, email, password);

      return user;
    } catch (error) {
      toastErrorNotify("Register can not be performed");
    }
  };
  const login = async (email, password) => {
    try {
      toastSuccessNotify("Login performed");

      const user = await signInWithEmailAndPassword(auth, email, password);
      loginSuccess();

      return user;
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    try {
      toastSuccessNotify("Logout performed");
      await signOut(auth);
      return true;
    } catch (error) {
      toastErrorNotify("Logout can not be performed");
    }
  };
  return { login, register, logout };
};
export default useAuthCall;
