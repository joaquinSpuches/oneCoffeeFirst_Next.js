'use client'
import { useState } from 'react';
import FormularioLogin from "@/Components/auth/FormularioLogin";
import Title from "@/Components/Title";
import Link from 'next/link';


export default function Page() {
    const [showDenied, setShowDenied] = useState(false);

    // Simulamos un tiempo de carga de 2 segundos
    setTimeout(() => {
        setShowDenied(true);
    }, 2000);

    return (
       <div className="h-screen flex flex-col text-white  bg-green-600 justify-around items-center">
            <div className="flex flex-col items-center">
            <Title text='Felicitaciones'/>
            <h2 className=" text-xl font-bold  ">¡Ya estas registrado!</h2>
            </div>
           <div className="flex flex-col gap-5 items-center">
           <Link className=" transition ease-in  hover:bg-[#ECDCC8] p-3 border-[0.5px] border-white rounded-lg w-[200px] text-center" href="/">Ir al Inicio</Link>
           
           </div>
        </div> 
    );
}