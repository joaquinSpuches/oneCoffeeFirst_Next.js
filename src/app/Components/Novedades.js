import Filtro from "./Filtro";
import ProductoDestacado from "./ProductoDestacado";
import CarruselProductos from "./CarruselProductos";
import Text from "./Text";
import Link from "next/link";

export default function Novedades() {
  return (
    <div className="flex flex-col items-center w-screen rounded-lg min-h-screen bg-gray-100">
      <div className="p-5 w-full">
        <Filtro params={["Origen", "Blend", "Accesorios", "Todos"]} />
      </div>
      <ProductoDestacado params="Etiopia" />
      <Link
        href="/Productos"
        className="justify-between w-full pt-3 px-6 flex "
      >
        <Text text="Origen" />
        <p className=" text-gray-400 ">Ver todo</p>
      </Link>
      <CarruselProductos titulo="ETIOPIA" precio={'USD ' + 9.99} />
      <Link
        href={"/Productos"}
        className="justify-between w-full pt-3 px-6 flex "
      >
        <Text text="Destacados de origen" />
        <p className=" text-gray-400 ">Ver todo</p>
      </Link>
      <CarruselProductos titulo="ETIOPIA" precio={9.99} />
    </div>
  );
}
