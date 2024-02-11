import Link from "next/link";
import Image from "next/image";
import BotonAtras from "./BotonAtras";
import CarritoCounter from "./CarritoCounter";

export default function HeaderDetalle() {
  return (
    <header className="flex justify-between items-center h-12">
      <div className="p-5">
        <BotonAtras />
      </div>
      <Link href="/">
        <Image alt="logo" src={"/logo.svg"} width={100} height={100} />
      </Link>
      <Link href={"/Carrito"}>
        <div className="p-5">
          <Image
            alt="carrito de compras"
            src={
              "https://raw.githubusercontent.com/isbendiyarovanezrin/ShoppingCart/master/images/shopping-cart.png"
            }
            width={25}
            height={25}
          />
          <CarritoCounter />
        </div>
      </Link>
    </header>
  );
}
