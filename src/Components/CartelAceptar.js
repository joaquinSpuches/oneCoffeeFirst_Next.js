import { useState,useEffect } from "react";
import Link from "next/link";
import { doc, setDoc } from "firebase/firestore";
import { useCartContext } from "./context/cartcontext";
import { db } from "@/firebase/config";
import { useAuthContext } from "./context/AuthContext";
import { useRouter } from "next/navigation"
export default function CartelAceptar({response}) {
    const { cart } = useCartContext();
    const { setCart } = useCartContext();
    const { user } = useAuthContext();
    const docRef = doc(db, "ventas", Date.now().toString());
    const [param, setParam] = useState(false);
    const router = useRouter()
   useEffect(() => {
         setParam(response);
    }, [response])
    const [ConfirmarCompra, setConfirmarCompra] = useState(false);
    const handleSubmit = () => {
        setConfirmarCompra(true);
        const ticket = {cart}
        if (user.logged) {
            //si confirma la compra y esta logeado, se guarda el ticket en la base de datos y lo redirige a la pagina principal
              setDoc(docRef, {
                ...ticket,
                user: user.uid,
                fecha: Date.now(),
              }).then(() => {
                setCart([]); //reinicia el carrito una vez que se finaliza la compra
                 //mensaje de confirmacion de compra
                router.push('/Congrats')//redirige a la pagina principal
              });
            }else {
            // si no esta logeado lo redirige a la pagina de login
            router.push("/Perfil");
          }
        }
    
  
    if (param) {
    return(
        <div className='fixed bg-black bg-opacity-50   z-50 h-screen top-0 w-full '>
           <div className="fixed top-1/2 ">
           <h1 className='text-xl text-center  p-5 font-bold w-screen text-white  '>¿Seguro que quieres realizar la compra? </h1>
            <div className="flex justify-center">
                <button onClick={()=>window.location.href='/Carrito'} className='bg-red-500 text-white w-36 rounded-full p-5 m-1' >Cancelar</button>
                <button onClick={handleSubmit} className='bg-green-500  text-white w-36 p-5 m-1  rounded-full ' >Aceptar</button>
            </div>
           </div>
        </div>
    )
    
}else{
    return (
        <div></div>
        )
}
}