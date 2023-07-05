import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
const firebaseConfig = {
  apiKey: "AIzaSyAhhPCEq2eNmPrcxbVfGpPQ8g1tU8Zd8V0",
  authDomain: "rezervation-4bc57.firebaseapp.com",
  projectId: "rezervation-4bc57",
  storageBucket: "rezervation-4bc57.appspot.com",
  messagingSenderId: "705310670423",
  appId: "1:705310670423:web:8ffc0388a0ce5c9df42d12",
};
const app = initializeApp(firebaseConfig);

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const BASE_URL = "https://12130.fullstack.clarusway.com/";

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
      navigate("/");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}account/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("/login");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Logout can not be performed");
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/register/`,
        userInfo
      );
      console.log(data);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/login");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Register can not be performed");
    }
  };

  return { login, register, logout };
};

export default useAuthCall;
