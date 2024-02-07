import Link from "next/link";
import Title from "./Title";
import Image from "next/image";

export default function Navegador({params,handleMenu}) {
    return (
      <div className=" fixed   bg-indigo-800 w-screen h-screen left-0 top-0">
        <Image
          height={100}
          width={100}
          alt="flecha atras"
          src="https://raw.githubusercontent.com/joaquinSpuches/oneCoffeeFirst/49a7b62290d9c4e9956cc3ce58c52d0caa774aba/Front/public/3916909.svg"
          className="h-10 invert "
          onClick={handleMenu}
        />
        <ul className="text-white flex flex-col justify-center w-full h-full p-5 ">
          <Link href={"/Perfil/Admin"}>
            <Title text="Admin" />
          </Link>
          <Link href={"/Productos/DetalleProducto"}>
            <Title text="Detalle producto" />
          </Link>
          {params.map((e) => {
            return (
              <Link key={e} href={e}>
                <Title text={`${e}`} />
              </Link>
            );
          })}
        </ul>
      </div>
    );
};
