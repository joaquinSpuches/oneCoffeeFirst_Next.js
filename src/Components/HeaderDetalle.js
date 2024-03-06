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
        <Image priority alt="logo" unoptimized src={"https://firebasestorage.googleapis.com/v0/b/onecoffeefirst-5da09.appspot.com/o/Logo.svg?alt=media&token=c1833c26-9a1a-4566-abea-6db4cbf75235"} width={100} height={34} />
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
