import Image from "next/image";
import Precio from "./Precio";
import Link from "next/link";
import Title from "./MiniTitle";

export default function Producto({ titulo, precio, id, image }) {
  
  return (
    <article
      key={Math.random()}
      className=" self-center w-1/2 border-4 border-gray-100"
    >
      <Link href={`/Productos/${id}`}>
        <div className="bg-white  w-full rounded-md min-w-1/2 max-w-64 ">
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
          <div className="p-3 max-w-44 min-w-28">
            <Title text={titulo} />
            <Precio text={precio} />
          </div>
        </div>
      </Link>
    </article>
  );
}
