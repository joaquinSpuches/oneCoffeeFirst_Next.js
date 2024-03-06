import HeaderDetalle from "@/Components/HeaderDetalle";
import CarruselProductos from "../../../Components/CarruselProductos";
import Text from "../../../Components/Text";
import Link from "next/link";
import { Suspense } from "react";
export default function layout({ children }) {
  return (
    <div>
      <HeaderDetalle />
      {children}
      <div className="  pb-24 bg-gray-100">
        <div className="justify-start w-full p-5">
          <Link
            href={"/Productos"}
            className="justify-between w-full pt-3  flex "
          >
            <Text text="Destacados de origen" />
            <p className=" text-gray-400 ">Ver todo</p>
          </Link>
        </div>

       <Suspense fallback={<p>cargado...</p>}>
       <CarruselProductos categoria='Todos'/>
       </Suspense>
      </div>
    </div>
  );
}
