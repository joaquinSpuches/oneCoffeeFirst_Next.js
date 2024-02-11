import HeaderDetalle from "@/Components/HeaderDetalle";
import CarruselProductos from "../../../Components/CarruselProductos";
import Text from "../../../Components/Text";
import Link from "next/link";
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

        <CarruselProductos titulo="Guatemala" precio='9.99' id='2' />
      </div>
    </div>
  );
}
