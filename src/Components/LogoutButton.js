'use client'

import { useAuthContext } from "./context/AuthContext"; 
import { useCartContext } from "./context/cartcontext";

export default function LogoutButton() {
    const {logOut} = useAuthContext()
    const {setCart} = useCartContext()

    const handleClick = () => {
        setCart([])
        logOut()
        
    }
    return(
        <button onClick={handleClick} className="bg-red-500 p-3 rounded-lg w-52 self-center">Cerrar sesion</button>
    )
};
