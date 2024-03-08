'use client'
import { doc, setDoc } from "firebase/firestore";
import { useCartContext } from "./context/cartcontext";
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";
import { useAuthContext } from "./context/AuthContext";
import { useRouter } from "next/navigation"
import CartelAceptar from "./CartelAceptar";
export default function BotonComprar() {
 
  const[cartel, setCartel] = useState(false)   

  useEffect(() => { 
    if(cartel){
      setCartel(false)
    } },[])  
    return (
      <div>
      <CartelAceptar response={cartel} set /> 
   {!cartel? <div onClick={()=>setCartel(true)} className=" cursor-pointer l-0 w-full absolute">
      
      <div className="h-12 l-0  w-screen fixed bottom-10 flex justify-center">
        <div className="bg-indigo-900 rounded-full p-4 w-3/4 items-center justify-center flex">
          <p className="font-bold text-white ">Finalizar mi compra</p>
        </div>
      </div>
    </div>:null }
    </div>
  );
    }
