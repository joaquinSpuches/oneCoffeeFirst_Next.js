"use client";
import { auth } from "@/firebase/config";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null,
  });
  const registerUser = async (values) => {
   await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    

    
  };
  const logOut = async () =>{
    await signOut(auth);
  }
  const loginUser = async (values) => {
    await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );

    
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
       
        user ? setUser({logged:true, email:user.email, uid:user.uid,
            }):  setUser({logged:false,email: null,uid: null});
    });
  },[]);
  return (
    <AuthContext.Provider value={{ user, registerUser, loginUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
