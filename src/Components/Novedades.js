import Filtro from "./Filtro";
import ProductoDestacado from "./ProductoDestacado";
import Carruseles from "./Carruseles";
import CarruselProductos from "./CarruselProductos";
import Text from "./Text";
import Link from "next/link";
import { Suspense } from "react";

export default function Novedades() {
  return (
    <div className="flex flex-col items-center w-screen rounded-lg  bg-gray-100">
      <nav className="p-5 w-full">
        <Filtro params={["Origen", "Blend", "Accesorios", "Todos"]} />
      </nav>
    <div className="flex flex-col sm:flex-row items-center w-screen rounded-lg  bg-gray-100">
    <ProductoDestacado params="Etiopia" />
     <Carruseles />
    </div>
    </div>
  );
}
