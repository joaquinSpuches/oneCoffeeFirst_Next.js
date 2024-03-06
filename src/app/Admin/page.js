import FormularioCrear from "@/Components/FormularioCrear";
import Header from "@/Components/Header";
import LogoutButton from "@/Components/LogoutButton";
import Title from "@/Components/Title";
import Link from "next/link";

export default function page(params) {
  return (
    <div className="h-screen">
        <Header />
      <main className=" items-center pt-12 flex flex-col h-screen gap-10">

        <Title text='Admin' />
        <div className="self-center flex flex-col gap-5">
          <ul className="flex gap-5">
       
            <Link className=" bg-blue-400 p-3 rounded-lg" href={"/Admin/crear"}>
          
              Crear item{" "}
            </Link>
            <Link
              className=" bg-blue-400 p-3 rounded-lg"
              href={"/Admin/editar"}
            >
         
              Editar item{" "}
            </Link>
          </ul>
          <LogoutButton />
        </div>
      </main>
    </div>
  );
}
