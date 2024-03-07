"use client";
import { useState } from "react";
import { useCartContext } from "./context/cartcontext";
import Link from "next/link";
export default function BotonAñadir(item) {
  const { addToCart } = useCartContext();
   
  const handleSubmit = () => {
    addToCart({ ...item });
  };
  

  return (
    <div onClick={handleSubmit} className=" cursor-pointer l-0 w-full absolute">
      <div className="h-12 l-0  w-screen fixed bottom-10 flex justify-center">
        <div className="bg-indigo-900 rounded-full p-4 w-3/4 items-center justify-center flex">
          <p className="font-bold text-white ">
            Agregar al carrito
          </p>
        </div>
      </div>
    </div>
  );
}
