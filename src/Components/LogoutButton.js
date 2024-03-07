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
        <button onClick={handleClick} className=" text-red-600">Cerrar sesion</button>
    )
};
