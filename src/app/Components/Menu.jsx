'use client'
import { useState } from "react"
import Navegador from "./Navegador"

export default function Menu(params) {
    const [menu,setMenu] = useState(false)

    const handleMenu = ()=>{
        setMenu(!menu)
        console.log('hola');
    }
        
    return(
     <div>
           <div onClick={handleMenu} className="w-5">
         
         <div className="h-0.5 bg-indigo-950 w-3 rounded-full mb-1"></div>
         <div className="h-0.5 max-h-0.5 bg-indigo-950 w-4 rounded-full "></div>
         <div className="h-0.5 bg-indigo-950 w-2 rounded-full mt-1"></div>
         </div>
         {
            menu ? <Navegador handleMenu={handleMenu}  params={['Productos', 'Carrito']}/>: ''
         }
     </div>
    )
};
