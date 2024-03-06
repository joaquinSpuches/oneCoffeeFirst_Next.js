import Image from "next/image";
import Precio from "./Precio";
import Link from "next/link";
export default function ProductoDestacado({ params }) {
  return (
    <Link
      href={`/Productos/Etiopia1709565415632`}
      className=" md:w-[40vw] w-full"
    >
      <article className="flex justify-between md:flex-row flex-col-reverse items-center p-10 bg-white rounded-md mx-6">
        <div className="flex md:flex-col items-center">
        <div className="text-2xl font-extrabold">
          <h1>
            {" "}
            ETIOPIA <br /> ORIGEN <br /> ACACIA{" "}
          </h1>
        </div>
        <h1 className="text-red-500 text-xl font-bold p-5 border-solid border-red-500 border-2 rounded-lg m-4 ">USD 9,99</h1>
      </div>
      <div className="flex justify-center">
        <Image
          priority
          alt="producto"
          src={
            "https://raw.githubusercontent.com/joaquinSpuches/oneCoffeeFirst/main/Front/public/Asset%204.png"
          }
          width={300}
          height={479}
        />
        </div>
      </article>
    </Link>
  );
}