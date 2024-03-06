"use client";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useAuthContext } from "@/Components/context/AuthContext";
import { useState } from "react";

const AdminLayout = ({ children, login }) => {
  const { user } = useAuthContext();
  /* AdminUser es una funcion que recibe por parametro el uid del usuario */
  const AdminUser = async (uid) => { 
    const docRef = collection(db, "adminUser");
    const querySnapshot = await getDocs(docRef);
    const users = querySnapshot.docs.map((doc) => doc.data());
    /* Si encuentra un usuario con el uid que le llego por parametro 
       setea userLogged en true y sino lo setea en false */
    if (users.find((user) => user.uid === uid)) {
      setUserLogged(true);
    } else {
      setUserLogged(false);
    }
  };

  const [userLogged, setUserLogged] = useState(null);

  AdminUser(user.uid); // Llamamos a la funcion AdminUser con el uid del usuario logueado
  return <>{userLogged  ? children : login}</>;
};

export default AdminLayout;
