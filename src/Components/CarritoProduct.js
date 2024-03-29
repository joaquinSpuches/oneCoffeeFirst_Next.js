'use client'
import Precio from "./Precio";
import Contador from "./Contador";
import Image from "next/image";
import MiniTitle from './MiniTitle';
import { useAuthContext } from "./context/AuthContext";
import { useCartContext } from "./context/cartcontext";
import BotonComprar from "./BotonComprar";
import Title from "./Title";
export default function CarritoProduct(params) {
    const {cart} = useCartContext()
    const {deleteFromCart} = useCartContext()
    let total = 0;
    return(
        <div>
        <BotonComprar />
        {cart.map((e,i)=>{
            
            const handleDelete =async (e) => {
                //e.target.id es el id del item a eliminar
                    deleteFromCart(e.target.id);   
                 }
             
            total += Number(cart[i].item.precio)
             
            return (
                <div key={i} className="flex justify-between border-b-2 border-gray-400">
            
                <div className="flex">
                <div className="w-28 flex justify-center m-4 p-4 bg-gray-100 rounded-md ">
                 <Image src={cart[i].item.image} height={479} width={300} className="h-20 object-contain" alt='Foto del producto'/>
                 </div>
                 <div className="flex flex-col justify-around">
                     <div>
                    
                         <MiniTitle text={cart[i].item.titulo} />
                         <Precio text={cart[i].item.precio} />
                     </div>
                     {/*
                   
                     <Contador /> //  No esta implementado el contador en el carrito. 
                     
                     */}
                 </div>
                </div>
                 <div className="self-end m-4">
                     <div onClick={handleDelete} >
                         <Image id={i}  width={20} height={30} alt='eliminar' src="https://raw.githubusercontent.com/joaquinSpuches/oneCoffeeFirst/04b416a9dbb2a213977d4581f768c05b6c8754f7/Front/public/trash.svg" />
                     </div>
                 </div>
                 
             </div>
            )
        })}
       <div className="m-5">
       <Title text={`Total: ${total.toFixed (2)}`} />
       </div>
        
       </div>
    )
};
// Path: src/Components/CarritoProduct.js   