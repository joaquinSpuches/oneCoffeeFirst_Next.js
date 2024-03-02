import Image from "next/image";
import Precio from "./Precio";
import Link from "next/link";
import Texto from "./Text";

export default function Producto({ titulo, precio, id, image }) {
  
  return (
    <article
      key={Math.random()}
      className=" self-center w-full h-full  border-4 border-gray-100"
    >
      <Link href={`/Productos/${id}`}>
        <div className="bg-white h-full  md:w-96 rounded-md min-w-1/2">
          <div className="flex justify-center">
            <Image
              priority
              className="p-8 outline-8 min-w-20 max-w-36 "
              alt="producto"
              width={300}
              height={479}
              src={image}
            />
          </div>
          <div className="p-3  min-w-28">
            <Texto text={titulo} />
            <Precio text={`USD ${precio}`} />
          </div>
        </div>
      </Link>
    </article>
  );
}
