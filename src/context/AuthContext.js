import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../helpers/firebase";
import { Navigate } from "react-router-dom";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const initialState = {
  user: null,
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    case "GET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const googleProvider = new GoogleAuthProvider();

  function checkUser() {
    return onAuthStateChanged(auth, (user) => {
      dispatch({
        type: "GET_USER",
        payload: user,
      });
    });
  }

  useEffect(() => {
    checkUser();
  }, []);

  async function register(email, password, nickname) {
    try {
      await createUserWithEmailAndPassword(auth, email, password, nickname);
    } catch (error) {
      dispatch({
        type: "GET_ERROR",
        payload: error.message,
      });
    }
  }

  async function signInWithGoogle() {
    try {
      let result = await signInWithPopup(auth, googleProvider);
      dispatch({
        type: "GET_USER",
        payload: result.user,
      });
    } catch (error) {
      dispatch({
        type: "GET_ERROR",
        payload: error.message,
      });
    }
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      dispatch({
        type: "GET_ERROR",
        payload: error.message,
      });
    }
  }

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Navigate("/list");
    } catch (error) {
      dispatch({
        type: "GET_ERROR",
        payload: error.message,
      });
    }
  }

  const values = {
    register,
    error: state.error,
    signInWithGoogle,
    user: state.user,
    logout,
    login,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
