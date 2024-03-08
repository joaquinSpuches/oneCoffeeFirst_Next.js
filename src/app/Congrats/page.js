import MiniTitle from "@/Components/MiniTitle"
import Title from "@/Components/Title"
import Link from "next/link"
import Image from "next/image"

export default function page(params) {
    return(
        <div className="h-screen flex flex-col text-white  bg-green-600 justify-center items-center">
            <div className="flex flex-col items-center">
            <Title text='Felicitaciones'/>
            <h2 className=" text-xl font-bold  ">¡Haz completado tu compra!</h2>
            </div>
            <Image className="py-24" priority src="https://firebasestorage.googleapis.com/v0/b/onecoffeefirst-5da09.appspot.com/o/Touch%20ID%20Symbol.png?alt=media&token=5619aa3a-6a48-4752-87ef-4471dac61c2e" width={84} height={86} alt="Compra Exitosa"/>
           <div className="flex flex-col gap-5 items-center">
           <Link className=" transition ease-in  hover:bg-[#ECDCC8] p-3 border-[0.5px] border-white rounded-lg w-[200px] text-center" href="/">Ir al Inicio</Link>
            <Link className=" transition ease-in  hover:bg-[#ECDCC8] p-3 border-[0.5px] border-white rounded-lg w-[200px] text-center"  href="/Perfil/Compras">Ver mis compras</Link>
           </div>
        </div> 
    )
};
