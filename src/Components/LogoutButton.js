'use client'

import { useAuthContext } from "./context/AuthContext"; 


export default function LogoutButton() {
    const {logOut} = useAuthContext()

    return(
        <button onClick={logOut} className="bg-red-500">Cerrar sesion</button>
    )
};
