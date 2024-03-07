import Link from "next/link";
import MiniTitle from "../../Components/MiniTitle";
import ProfileData from "../../Components/ProfileData";
import LogoutButton from "@/Components/LogoutButton";
import HeaderDetalle from "@/Components/HeaderDetalle";

export default function page(params) {
  return (
    <div className="flex flex-col">
      <div className="sm:w-1/2 self-center">
        <HeaderDetalle />
        <div className="flex justify-between p-5">
          <ProfileData />
          <LogoutButton />
        </div>
        <ul className=" flex flex-col items-center">
          <li className=" w-full p-5  h-fit border-t-2  ">
            <Link href="/Carrito">
              <MiniTitle text="Carrito" />
            </Link>
          </li>
          <li className=" w-full p-5  h-fit border-t-2 ">
            <Link href="/Perfil/Compras">
              <MiniTitle text="Compras realizadas" />
            </Link>
          </li>
          <li className=" w-full p-5  h-fit border-t-2 border-b-2 ">
            <Link href="/Admin">
              <MiniTitle text="Admin" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
