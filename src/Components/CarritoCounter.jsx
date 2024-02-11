
'use client'
import Link from "next/link"    
import Image from "next/image"
import { useCartContext } from "./context/cartcontext"


export default function CarritoCounter(params) {

    const {cart} = useCartContext()

    return(
       
          <p>{cart.length}</p>
        
    )
};
