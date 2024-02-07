import Image from "next/image";
import Precio from "./Precio";
import Text from "./Text";
import Link from "next/link";
import { randomInt } from "crypto";
export default function Producto({ titulo, precio, id }) {
  return (
    <div
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
              width={250}
              height={250}
              src="https://raw.githubusercontent.com/joaquinSpuches/oneCoffeeFirst/main/Front/public/Asset%204.png"
            />
          </div>
          <div className="p-3 max-w-44 min-w-28">
            <Text text={titulo} />
            <Precio text={precio} />
          </div>
        </div>
      </Link>
    </div>
  );
}
