import CarruselProductos from "./CarruselProductos";
import Text from "./Text";
import Link from "next/link";
import { Suspense } from "react";

export default function Carruseles(params) {
    
    return(
        <div className="w-[60vw]">
         <Link
        href="/Categorias/Origen"
        className="justify-between w-full pt-3 px-6 flex "
      >
        <Text text="Origen" />
        <p className=" text-gray-400 ">Ver todo</p>
      </Link>
      <Suspense fallback={<div>Cargando...</div>}>
      <CarruselProductos categoria='Origen' />
      </Suspense>
      <Link
        href={"/Categorias/Accesorios"}
        className="justify-between w-full pt-3 px-6 flex "
      >
        <Text text="Accesorios" />
        <p className=" text-gray-400 ">Ver todo</p>
      </Link>
      <Suspense fallback={<div>Cargando...</div>}>
      <CarruselProductos categoria='Accesorios' />
      </Suspense>
      </div>
    )
};
