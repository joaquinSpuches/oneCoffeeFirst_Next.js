"use client";
import { useState } from "react";
import { useCartContext } from "./context/cartcontext";
import CartelAñadido from "./CartelAñadido";
import Link from "next/link";
export default function BotonAñadir(item) {
  const { addToCart } = useCartContext();
  
  const [added, setAdded] = useState(false);
  const handleSubmit = () => {
    addToCart({ ...item });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 900);
  };

  return (
    <div onClick={handleSubmit} className=" cursor-pointer l-0 w-full z-50  absolute">
      <CartelAñadido off={added} />
      <div className="h-12 l-0   w-screen fixed bottom-10 flex justify-center">
        <div className="bg-indigo-900 rounded-full p-4 w-3/4 items-center justify-center flex">
          <p className="font-bold text-white ">
            Agregar al carrito
          </p>
        </div>
      </div>
    </div>
  );
}
