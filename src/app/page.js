import Image from "next/image";
import Novedades from "../Components/Novedades";
import Title from "../Components/Title";
import Text from "../Components/Text";
import Header from "../Components/Header";
import Navegador from "../Components/Navegador";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5 ">
      <Header />
      <div className="pt-10 flex-row justify-start size-full">
        <Text text="Hola, Marcos" />
        <Title text="Que café quieres?" />
      </div>
      <form>
      <input
        type="search"
        placeholder="Buscar"
        className="size-full my-10 rounded-md placeholder-gray-300 border-2 border-gray-300 text-xs px-6 py-4"
      />
      </form>
      <Novedades />
    </main>
  );
}
