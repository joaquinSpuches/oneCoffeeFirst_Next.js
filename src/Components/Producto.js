import Image from "next/image";
import Precio from "./Precio";
import Link from "next/link";
import Texto from "./Text";

export default function Producto({ titulo, precio, id, image }) {
  
  return (
    <article
      key={Math.random()}
      className=" self-center w-auto   border-4 border-gray-100"
    >
      <Link href={`/Productos/${id}`}>
        <div className="bg-white h-full md:h-full  md:w-60 w-44 rounded-md min-w-full">
          <div className="flex object-fill h-44 justify-center">
            <Image
              priority
              className="p-8  outline-8 object-contain min-w-20 max-w-36 "
              alt="producto"
              width={300}
              height={479}
              src={image}
            />
          </div>
          <div className="p-3  min-w-28 w-auto">
            <Texto text={titulo} />
            <Precio text={`USD ${precio}`} />
          </div>
        </div>
      </Link>
    </article>
  );
}
